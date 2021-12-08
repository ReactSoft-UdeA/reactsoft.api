import modeloAvance from "./avance.js";

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const getAllAvances = await modeloAvance.find()
      return getAllAvances;
    },
  },
  Mutation: {
    CrearAvance: async (parent, args) => {
      const avanceCreado = await modeloAvance.create(args);
      return avanceCreado;
    },
    EditarAvance: async (parent, args) => {
      const avanceEditado = await modeloAvance.findOneAndUpdate(args._id, {
        fechaAvance: args.fechaAvance,
        descripcion: args.descripcion,
        observaciones: args.observaciones,
        proyecto: args.proyecto,
        usuarioRegistra: args.Usuarios,
      });
      return avanceEditado;
    },
    EliminarAvance: async (parent, args) => {
      const avanceEliminado = await modeloAvance.findOneAndDelete(args._id);
      return avanceEliminado;
    },
  },
};

export { resolversAvance };
