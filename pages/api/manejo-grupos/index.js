// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect"
import cors from 'cors';
import { grupoEstudiantes,gruposData,estudiantesData } from "../../../data/estudiantes";
import mongoose from "mongoose";

const findGrupo = id => grupoEstudiantes.find(grupo => grupo.id == id);



const addEstudiantes = async (idGrupo,idEstudiante) => {
    const estudiante = await estudiantesData.findOne({id: idEstudiante});
    console.log("estudiante",estudiante)
    gruposData.findOne({id:idGrupo}).then(group => {
        group.integrantes.push(estudiante);
        group.save()
    });
    // console.log(grupo.integrantes)
    // const newStudents = grupo.integrantes;
    // newStudents.push(estudiante)
    // console.log("Nuevo estudiante",newStudents)
    // console.log("Grupo",grupo)
    // gruposData.updateOne({id:idGrupo},{$set: {"nombre":"avengers"}})//{$set:{integrantes:estudiante}});
}

const deleteEstudiante = (idGrupo,idEstudiante) => {
    gruposData.findOne({id:idGrupo}).then(grupo => {
        const indexEstudiante = grupo.integrantes.findIndex(est => est.id == Number(idEstudiante));
        grupo.integrantes.splice(indexEstudiante,1);
        grupo.save()
    })
    // const grupo = findGrupo(idGrupo);
    // 
    // grupo.estudiantes.splice(indexEstudiante,1);
}

const handler = nc().use(cors()).post(async (req, res) => {
    const {idGrupo,idEstudiante} = req.body;
    await addEstudiantes(idGrupo,idEstudiante);
    res.send("Estudiante creado en grupo");
}).delete(async(req,res)=>{
    const {idGrupo,idEstudiante} = req.body; 
    deleteEstudiante(idGrupo,idEstudiante);
    res.send(`Estudiante eliminado en grupo`);
})

export default handler;