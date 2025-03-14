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

app.post('/pack/generate', (req,res)=>{
    const parsedSchema = generateImageFromPack.safeParse(req.body);
    if(!parsedSchema) res.json({
        message : "Incorrect type of Input"
    })
})

app.listen(PORT, ()=>{
    console.log("Server is running on port ",PORT)
})