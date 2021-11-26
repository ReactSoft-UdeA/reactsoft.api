import mongoose from "mongoose";


const conectarBD = async ()=>{
    return await mongoose.connect(
        'mongodb+srv://reactsoft:ReactSoftt@gestionproyectosmisiont.hjmim.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
    ).then(()=>{
        console.log('Conexion a la BD Exitosa!!');
    }).catch(e=>{
        console.error('Falla En la conexion a la BD ',e);
    });
};

export default conectarBD;
