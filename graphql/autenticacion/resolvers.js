import { UserModel } from "../../models/usuario/usuario.js"

const resolversAutenticacion = {
    Mutation: {
        registro: async (parent, args) =>{
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                clave: args.clave,
            });
            console.log('usuario creado', usuarioCreado);
            return 'usuario creado'
        }
    }
}

export {resolversAutenticacion}