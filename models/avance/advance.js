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
        type:Number
    },
    usuarioRegistra: {
        type:Number
    }
})

const modeloAvance = model('Avance', avanceSchema)

export default modeloAvance;