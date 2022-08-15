
import mongoose from "mongoose";
import { Schema } from "mongoose";

export 
const mongocone = "mongodb+srv://jeremyadmin:12345@cluster0.xpi2g.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(mongocone);

const estudiantesSchema = new Schema({
    id:Number,
nombre: String,
apellido:String,
matricula:String,
carrera: String
})

const grupoSchema = new Schema({
    id:Number,
nombre: String,
integrantes: []
})

const estudiantesData = mongoose.models.students || mongoose.model('students',estudiantesSchema);
const gruposData = mongoose.models.groups || mongoose.model('groups',grupoSchema);

gruposData.up

const estudiantes = [
    {id:0,nombre:"Jeremy Mezon"},{id:1,nombre:"Rafael Ogando"}
];

const grupoEstudiantes = [
    {
        id: 0,
        nombre: "fenix",
        estudiantes: [
            {id:0}
        ]
    }
]

module.exports = {
    estudiantes,
    grupoEstudiantes,
    estudiantesData,
    gruposData,
    mongocone
}