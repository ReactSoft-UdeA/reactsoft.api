import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const avanceSchema = new Schema({
    fechaAvance: {
        type:String,
        required:true
    },
    descripcionAvance: {
        type:String,
        required:true
    },
    observaciones: [
        {
            type:String
        }
    ],
    proyecto: {
        type:String
    },
    usuarioRegistra: {
        type:String
    }
})

const modeloAvance = model('Avance', avanceSchema)

export default modeloAvance;