import express, { application, json } from "express";
import { TrainModel, generateImage, generateImageFromPack } from "common/types";
import { prismaClient } from "db";
import { S3Client, s3 } from "bun";
import { FalAIModel } from "./FalAIModel";

const app = express();
const USER_ID  = "123" 
app.use(express.json());
const PORT = process.env.PORT || 8080

const credentials = {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.ACCESS_SECRET_KEY,
    bucket: process.env.BUCKET_NAME,
    endpoint: process.env.ENDPOINT, // Cloudflare R2
  };

const falAiClient = new FalAIModel();

//Presigned url is the standard way of doing some restrictions before storing data in s3
app.get('/pre-signed-url', async (req, res) =>{
    const key = `${Date.now()}_${Math.random()}_key`;
    const preSignUrl = S3Client.presign(key ,{
        ...credentials,
        expiresIn  : 5*60 
    })
    res.json({
        preSignUrl
    })
})

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
        const {  request_id } = await falAiClient.trainModel(parsedSchema.data.zipUrl, parsedSchema.data.name)

        const response = await prismaClient.model.create({
            data : {
                name            : parsedSchema.data.name,
                type            : parsedSchema.data.type,
                age             : parsedSchema.data.age,
                ethnicity       : parsedSchema.data.ethnicity,
                eyeColor        : parsedSchema.data.eyeColor,
                bald            : parsedSchema.data.bald,
                userId          : USER_ID ,
                falAiRequestId  : request_id,
                zipUrl          : parsedSchema.data.zipUrl
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

        const model = await prismaClient.model.findFirst({
            where : {
                id : parsedSchema.data.modelId
            }
        })

        if(!model || !model.tensorPath){
            res.status(411).json({
                message : "Module not found"
            })
            return;
        }

        const { request_id } = await falAiClient.generateImage(parsedSchema.data.prompt, model?.tensorPath)
        const response = await prismaClient.outputImages.create({
            data : {
                prompt          : parsedSchema.data.prompt,
                modelId         : parsedSchema.data.modelId,
                imageUrl        : "",
                userId          : USER_ID,
                falAiRequestId  : request_id
            }
        })
        res.json({imageId : response.id})
    }catch(e){
        console.log(e);
    }
})



app.post('/pack/generate',async (req,res)=>{
    const parsedSchema = generateImageFromPack.safeParse(req.body);

    if(!parsedSchema) {
        res.json({
            message : "Incorrect type of Input"
        })
        return;
    }

    const prompts = await prismaClient.packPrompts.findMany({
        where : {
            packId : parsedSchema.data?.packId
        }
    })
    if(!prompts){
        res.status(411).json({
            message : "Prompts not found for this packs"
        })
        return;
    }

    let request_ids : { request_id : string }[] = await Promise.all(prompts.map((prompt)=> falAiClient.generateImage(prompt.prompt, parsedSchema?.data?.packId || "")))

    const images = await prismaClient.outputImages.createManyAndReturn({ // return id of array in prisma
        data : prompts.map((prompt, index)=> ({
            modelId        : parsedSchema.data!.modelId,
            prompt         : prompt.prompt,
            userId         : USER_ID,
            imageUrl       : "",
            falAiRequestId : request_ids[index]?.request_id
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
    const ids = req.query.images as string [];
    const limit = req.query.limit as string;
    const offset  = req.query.offset as string;

    const imageData = await prismaClient.outputImages.findMany({
        where : {
            id : {in : ids} ,
            userId : USER_ID
        },
        skip : parseInt(limit),
        take : parseInt(offset)
    })

    res.json({
        images : imageData
    })
})


app.post('/fal-ai/webhook/train', async(req, res) =>{
    const { request_id } = req.body();
    await prismaClient.model.updateMany({
        where : {
            falAiRequestId : request_id
        },
        data : {
            status : "Generated",
            tensorPath : req.body.tensorPath
        }
    })
    res.json({
        message : "Webhook recieved"
    })
})

app.post('/fal=ai/webhook/generate', async(req, res)=>{
    const { request_id } = req.body;
    await prismaClient.outputImages.updateMany({
        where : {
            falAiRequestId : request_id
        },
        data : {
            status : "Generated",
            imageUrl : req.body.image_url
        }
    })
})

app.listen(PORT, ()=>{
    console.log("Server is running on port ",PORT)
})