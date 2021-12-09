import { ProjectModel } from "./proyecto.js";

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ProjectModel.find()
        .populate("lider")
        .populate("avances")
        .populate("inscripciones");
      return proyectos;
    },
    proyectosAdmin: async (parent, args) => {
      const proyectosAdmin = await ProjectModel.find();
      return proyectosAdmin;
    },
    proyectoRegistradoLider: async (parent, args) => {
      const proyectoRegistradoLider = await ProjectModel.findOne({
        _id: args._id,
      })
        .populate("lider")
        .populate("avances")
        .populate("inscripciones");
      return proyectoRegistradoLider;
    },
    // HU_019: async (parent, args) => {
    //   const HU019 = await ProjectModel.find();
    //   return HU019;
    // },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(
        args._id,
        { ...args.campos },
        { new: true }
      );
      return proyectoEditado;
    },
    crearObjetivo: async (parent, args) => {
      const proyectoConObjetivo = await ProjectModel.findByIdAndUpdate(
        //Buscar por Id y modificar
        args.idProyecto,
        {
          $addToSet: {
            //Funcion de mongo para añadir elemento a un Array
            objetivos: { ...args.campos },
          },
        },
        { new: true } //Para que muestre los ultimos cambios
      );

      return proyectoConObjetivo;
    },
    editarObjetivo: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $set: {
            [`objetivos.${args.indexObjetivo}.descripcion`]:
              args.campos.descripcion,
            [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
          },
        },
        { new: true }
      );
      return proyectoEditado;
    },
    eliminarObjetivo: async (parent, args) => {
      const proyectoObjetivo = await ProjectModel.findByIdAndUpdate(
        //Buscar por Id objetivo
        { _id: args.idProyecto },
        {
          $pull: {
            objetivos: {
              _id: args.idObjetivo,
            },
          },
        },
        { new: true }
      );
      return proyectoObjetivo;
    },
    // HU_007: async (parent, args) => {
    //   const HU007 = await ProjectModel.findByIdAndUpdate(
    //     args.id,
    //     {
    //       estado: "ACTIVO",
    //     },
    //     { new: true }
    //   );
    //   return HU007;
    // },
    // HU_008: async (parent, args) => {
    //   const HU008 = await ProjectModel.findByIdAndUpdate(
    //     args.id,
    //     {
    //       estado: args.estado,
    //     },
    //     { new: true }
    //   );
    //   return HU008;
    // },
    // HU_012: async (parent, args) => {
    //   const HU012 = await ProjectModel.create({
    //     nombre: args.nombre,
    //     fechaInicio: args.fechaInicio,
    //     fechaFin: args.fechaFin,
    //     presupuesto: args.presupuesto,
    //     lider: args.lider,
    //     objetivos: args.objetivos,
    //   });
    //   return HU012;
    // },
    // HU_014: async (parent, args) => {
    //   const HU014 = await ProjectModel.findByIdAndUpdate(
    //     args.id,
    //     {
    //       nombre: args.nombre,
    //       objetivos: args.objetivos,
    //       presupuesto: args.presupuesto,
    //     },
    //     { new: true }
    //   );
    //   return HU014;
    // },
  },
};

export { resolversProyecto };
