import modeloAvance from "../models/avance/advance.js";

const resolvers = {
    Query:{
        Usuarios: [
            {
                "nombre":"Leonardo"
            },
        ],

        Avances: async(parent, args)=>{
            const getAllAvances = await modeloAvance.find();
            return  getAllAvances;
        }
    },
    Mutation:{
        CrearAvance: async (parent, args)=>{
            const avanceCreado = await modeloAvance.create(args);
            return avanceCreado;
        }   
    }
     
   
};

export {resolvers};