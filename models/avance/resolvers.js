import modeloAvance from "./Advance"

const AvanceResolvers = {
    Query:{
        avancesByProyectAndUser = async(parent, args)=>{
            const getAllAvances = await modeloAvance.find();
            return  getAllAvances;
        } 
    }
}

export { AvanceResolvers };