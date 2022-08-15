// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect"
import cors from 'cors';
import { grupoEstudiantes,gruposData } from "../../../data/estudiantes";

const getAllGrupos = () => grupoEstudiantes.map(grupo => grupo);

const handler = nc().use(cors()).get((req,res)=>{
    gruposData.find((err,data)=>{
        res.send(data);
    })
}).post((req,res)=>{
    gruposData.create(req.body);
    res.send("Student created");
})

export default handler;