// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect"
import cors from 'cors';
import { estudiantes } from "../../../data/estudiantes";

const getEstudiantes = id => estudiantes.find(est => est.id == id);

const handler = nc().use(cors()).get((req, res) => {
  res.json(getEstudiantes(req.query.id))
})

export default handler;