import express from "express";
import { TrainModel, generateImage, generateImageFromPack } from "common/types";
import { prismaClient } from "db";

const app = express();
const USER_ID  = "123" 
app.use(express.json());
const PORT = process.env.PORT || 8080

//Training the Model with the list of Images
app.post('/ai/training',async (req, res)=>{ 
    try{
        const parsedSchema = TrainModel.safeParse(req.body)
        if(!parsedSchema.success){
            res.status(411).json({
                msg : "Incorrect type of input"
            })
            return;
        }
        const response = await prismaClient.model.create({
            data : {
                name      : parsedSchema.data.name,
                type      : parsedSchema.data.type,
                age       : parsedSchema.data.age,
                ethnicity : parsedSchema.data.ethnicity,
                eyeColor  : parsedSchema.data.eyeColor,
                bald      : parsedSchema.data.bald,
                userId    : USER_ID 
            }
        })
        res.json({
            modelId : response.id
        })
        return;
    }catch(e){
        res.status(400).json({
            message : "Something went wrong while train model creation"
        })
        console.log("Something went wrong while train model creation, ", e)
    }
})


//Generating an Image vian user's prompt
app.post('/ai/generate', async (req, res)=>{
    try{
        const parsedSchema = generateImage.safeParse(req.body);
        if(!parsedSchema.success){
            res.status(400).json({
                message : "Incorrect type of input"
            })
            return;
        }
        const response = await prismaClient.outputImages.create({
            data : {
                prompt : parsedSchema.data.prompt,
                modelId : parsedSchema.data.modelId,
                imageUrl : "",
                userId : USER_ID
            }
        })
        res.json({imageId : response.id})
    }catch(e){
        console.log(e);
    }
})



app.post('/pack/generate',async (req,res)=>{
    const parsedSchema = generateImageFromPack.safeParse(req.body);
    if(!parsedSchema) res.json({
        message : "Incorrect type of Input"
    })

    const prompts = await prismaClient.packPrompts.findMany({
        where : {
            packId : parsedSchema.data?.packId
        }
    })

    const images = await prismaClient.outputImages.createManyAndReturn({ // return id of array in prisma
        data : prompts.map((prompt)=> ({
            modelId : parsedSchema.data!.modelId,
            prompt  : prompt.prompt,
            userId  : USER_ID,
            imageUrl : ""
        }))
    })

    res.json({
        imageId : images.map((image) => image.id)
    })
})

app.get('/pack/bulk', async (req, res) =>{
    const packs = prismaClient.packs.findMany({})
    res.json(packs)
})

app.get('/images/bulk', async (req, res) =>{
    const images = req.query.images as string [];
    const limit = req.query.limit as string;
    const offset  = req.query.offset as string;

    const imageData = await prismaClient.outputImages.findMany({
        where : {
            id : {in : images},
            userId : USER_ID
        },
        skip : parseInt(limit),
        take : parseInt(offset)
    })

    res.json({
        images : imageData
    })
})

app.listen(PORT, ()=>{
    console.log("Server is running on port ",PORT)
})