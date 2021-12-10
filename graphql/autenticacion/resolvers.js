import { UserModel } from "../../models/usuario/usuario.js"
import bcrypt from 'bcrypt';
import { generateToken } from "../../utils/tokenUtils.js";

const resolversAutenticacion = {
    Mutation: {
        registro: async (parent, args) =>{

            const salt = await bcrypt.genSalt(10); // generamos el número de saltos para la encriptación
            const hashedclave = await bcrypt.hash(args.clave, salt) //generamos la encriptación
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                clave: hashedclave,// enviamos clave encriptada
            });
            console.log('usuario creado', usuarioCreado);
            return {
                token: generateToken({
                    _id: usuarioCreado._id,
                    nombre: usuarioCreado.nombre,
                    apellido: usuarioCreado.apellido,
                    identificacion: usuarioCreado.identificacion,
                    correo: usuarioCreado.correo,
                    rol: usuarioCreado.rol,
                })
            }
        }
    }
}

export {resolversAutenticacion}