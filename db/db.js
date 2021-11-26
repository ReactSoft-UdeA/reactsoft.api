import mongoose from "mongoose";


const conectarBD = async ()=>{
    return await mongoose.connect(
        'mongodb+srv://alramirez:UyrEMrha8bgqUTfS@gestiondeproyectos.yepmn.mongodb.net/GestionDeProyectos?retryWrites=true&w=majority'
    ).then(()=>{
        console.log('Conexion a la BD Exitosa!!');
    }).catch(e=>{
        console.error('Falla En la conexion a la BD ',e);
    });
};

export default conectarBD;
