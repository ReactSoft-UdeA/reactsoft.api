import { UserModel } from "./usuario.js";
import bcrypt from "bcrypt";

const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args) => {
      //console.log("parent usuario", parent);
      //console.log(args);
      const usuarios = await UserModel.find({...args.filtro}).populate([
        {
          path: "inscripciones",
          populate: {
            path: "proyecto",
            populate: [{ path: "lider" }, { path: "avances" }],
          },
        },
        {
          path: "proyectosLiderados",
        },
      ]);
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = await UserModel.findOne({ _id: args._id });
      return usuario;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.clave, salt);
      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        clave: hashedPassword,
      });

      if (Object.keys(args).includes("estado")) {
        usuarioCreado.estado = args.estado;
      }

      return usuarioCreado;
    },
    editarUsuario: async (parent, args) => {
      const usuarioEditado = await UserModel.findByIdAndUpdate(
        args._id,
        {
          nombre: args.nombre,
          apellido: args.apellido,
          identificacion: args.identificacion,
          correo: args.correo,
          // rol: args.rol,
          estado: args.estado,
          // clave: args.clave,
        },
        { new: true }
      );

      return usuarioEditado;
    },
    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const usuarioEliminado = await UserModel.findOneAndDelete({
          _id: args._id,
        });
        return usuarioEliminado;
      } else if (Object.keys(args).includes("correo")) {
        const usuarioEliminado = await UserModel.findOneAndDelete({
          correo: args.correo,
        });
        return usuarioEliminado;
      }
    },
  },
};

export { resolversUsuario };
