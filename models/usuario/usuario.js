import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "Ingrese un correo electrónico válido",
    },
  },
  rol: {
    type: String,
    required: true,
    enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"],
  },
  estado: {
    type: String,
    enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"],
    default: "PENDIENTE",
  },
  clave: {
    type: String,
    required: true,
  },
});

userSchema.virtual("proyectosLiderados", {
  ref: "Proyecto",
  localField: "_id",
  foreignField: "lider",
});

userSchema.virtual("avancesCreados", {
  ref: "Avance",
  localField: "_id",
  foreignField: "creadoPor",
});

userSchema.virtual("inscripciones", {
  ref: "Inscripcion",
  localField: "_id",
  foreignField: "estudiante",
});

const UserModel = model("usuarios", userSchema);

export { UserModel };
