import express from "express";
import { TrainModel, generateImage, generateImageFromPack } from "common/types";
const app = express();
const PORT = process.env.PORT || 8080

//EVERTHING IS WRITTN HARD HANDEDLY WITHOUT AI

app.post('/ai/training',(req, res)=>{

})


app.listen(PORT, ()=>{
    console.log("Server is running on port ",PORT)
})