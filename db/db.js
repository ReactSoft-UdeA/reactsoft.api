import mongoose from "mongoose";



const conectarBD = async ()=>{
    return await mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('Conexion a la BD Exitosa!!');
    }).catch(e=>{
        console.error('Falla En la conexion a la BD ',e);
    });
};

export default conectarBD;
