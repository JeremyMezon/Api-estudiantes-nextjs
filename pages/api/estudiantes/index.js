// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect"
import cors from 'cors';
import { estudiantes,estudiantesData,mongocone } from "../../../data/estudiantes";
import mongoose from "mongoose";
import { MongoClient } from 'mongodb';
console.log(estudiantesData);


const getAllEstudiantes = () => estudiantes.map(estudiantes => estudiantes);


const handler = nc().use(cors()).get(async (req,res)=>{
    estudiantesData.find((err,data)=>{
        res.send(data);
    })
    
}).post(async (req,res)=>{
    estudiantesData.create(req.body);
    res.send("Student created");
})

export default handler;