// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect"
import cors from 'cors';
import { estudiantes } from "../../data/estudiantes";


const handler = nc().use(cors()).get((req,res)=>{
  res.send("Hola Estudiante")
}).post((req, res) => {
  res.json({ hola: 'MedellinJS' })
})

export default handler;
