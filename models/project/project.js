import mongoose from "mongoose";

// import { ObjectiveModel } from "../objective.js";
import { UserModel } from "../user/user.js";
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    presupuesto: {
      type: Number,
      required: true,
    },
    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    estado: {
      type: String,
      enum: ["ACTIVO", "INACTIVO"],
      default: "INACTIVO", // Inactivo hasta que el admin apruebe
    },
    fase: {
      type: String,
      enum: ["INICIADO", "DESARROLLO", "TERMINADO", "NULO"],
      default: "NULO", //Cambia a iniciado cuando
    },
    lider: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: UserModel, //Conexion a tabla "Usuarios"
    },
    objetivos: [
      {
        descripcion: {
          type: String,
          required: true,
        },
        tipo: {
          type: String,
          enum: ["GENERAL", "ESPECIFICO"],
          required: true,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

projectSchema.virtual("inscripciones", {
  ref: "Inscripcion",
  localField: "_id",
  foreignField: "proyecto",
});

const ProjectModel = model("Project", projectSchema);

export { ProjectModel };
