import { ModeloAvance } from "./avance.js";

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await ModeloAvance.find()
        .populate("proyecto")
        .populate("creadoPor");
      return avances;
    },
    Avance: async (parent, args) => {
      const avance = await ModeloAvance.findOne({ _id: args._id });
      return avance;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await ModeloAvance.find({ proyecto: args._id })
        .populate("proyecto")
        .populate("creadoPor");
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = ModeloAvance.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return avanceCreado;
    },
    editarAvanceObs:async(parent,args)=>{
      const observacion = ModeloAvance.findOneAndUpdate(
      {_id:args._id},
      {$push:{observaciones:
        {$each:[args.observaciones]
        }
      }
  },
  {new:true}
     )
     return observacion;
    },
    editarAvance: async (parent, args) => {
      const avanceEditado = await ModeloAvance.findByIdAndUpdate(
        { _id: args._id },
        {
          fecha: args.fecha,
          descripcion: args.descripcion,
        },
        { new: true }
      );

      return avanceEditado;
    },
  },
};

export { resolversAvance };
