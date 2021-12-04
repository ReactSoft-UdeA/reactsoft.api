import mongoose from "mongoose";
import { ProjectModel } from "../proyecto/proyecto.js";
import { UserModel } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

const avanceSchema = new Schema({
  fechaAvance: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
});

const modeloAvance = model("Avance", avanceSchema);

export default modeloAvance;
