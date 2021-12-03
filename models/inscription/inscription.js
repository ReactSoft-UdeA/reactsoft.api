import mongoose from "mongoose";
import { ProjectModel } from "../project/project.js";
import { UserModel } from "../user/user.js";

const { Schema, model } = mongoose;

const inscriptionSchema = new Schema({
  estado: {
    type: String,
    enum: ["ACEPTADO", "RECHAZADO", "PENDIENTE"],
    default: "PENDIENTE", //Pendiente cuando se crea
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel, //conexion con tabla "Proyectos"
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel, //conexion con tabla "Usuarios"
    required: true,
  },
});

const InscriptionModel = model("Inscription", inscriptionSchema);

export { InscriptionModel };
