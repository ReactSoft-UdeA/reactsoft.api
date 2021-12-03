import mongoose from 'mongoose';
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
      message: 'Ingrese un correo electrónico válido',
    },
  },
  rol: {
    type: String,
    required: true,
    enum: ['Estudiante', 'Lider', 'Administrador'],
  },
  estado: {
    type: String,
    enum: ['Pendiente', 'Autorizado', 'No_Autorizado'],
    default: 'Pendiente',
  },
  clave:{
    type: String,
    required: true,
  },
});

const UserModel = model('usuarios', userSchema);

export { UserModel };
