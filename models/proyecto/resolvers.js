import Mongoose from "mongoose";
const { ObjectId } = Mongoose.Types;
import { InscriptionModel } from "../inscripcion/inscripcion.js";
import { UserModel } from "../usuario/usuario.js";
import { ProjectModel } from "./proyecto.js";

const resolversProyecto = {
  Proyecto: {
    lider: async (parent, args, context) => {
      const usr = await UserModel.findOne({
        _id: parent.lider.toString(),
      });
      return usr;
    },
    inscripciones: async (parent, args, context) => {
      const inscripciones = await InscriptionModel.find({
        proyecto: parent._id,
      });
      return inscripciones;
    },
  },
  Query: {
    Proyectos: async (parent, args, context) => {
      const proyectos = await ProjectModel.find();
      return proyectos;
    },
    ProyectosPorId: async (parent, args) => {
      let proyecto = await ProjectModel.find({ _id: args._id }).populate(
        "avances"
      );
      // .populate("lider")
      // .populate("inscripciones");
      return proyecto;
    },
    ProyectosPorLider: async (parent, args) => {
      const proyectosLider = await ProjectModel.find({ lider: args._id });
      // .populate("lider")
      // .populate("avances")
      // .populate("inscripciones");
      return proyectosLider;
    },

    ProyectoEstadoFase: async (parent, args) => {
      const proyecto = await ProjectModel.findOne({ _id: args._id });
      return proyecto;
    },

    // ProyectosPorInscripcion: async (parent, args) => {
    //   const proyectosInscripcion = await ProjectModel.find({
    //     inscripciones: args._id,
    //   });
    // .populate("lider")
    // .populate("avances")
    // .populate("inscripciones");
    // return proyectosInscripcion;
    // },
  },
  Mutation: {
    crearProyecto: async (parent, args, context) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
    editarProyecto: async (parent, args) => {
      console.log("Hhhhhol juan");
      console.log(args);
      console.log(args._id);
      const proyectoEditado = await ProjectModel.updateOne({
        _id:args._id,
        campos:{...args.campos}
        /* { ...args.campos },
        { new: true } */
      });
      console.log("Hhhhhol juan");
      console.log(proyectoEditado);

      return proyectoEditado;
    },

    proyectoFaseEstado: async (parent, args) => {
      const proyectoEditadoFaseEstado = await ProjectModel.findByIdAndUpdate(
        args._id,
        { 
          estado: args.estado,
          fase: args.fase, 
          },
        { new: true }
      );

      return proyectoEditadoFaseEstado;
    },

    crearObjetivo: async (parent, args) => {
      const proyectoConObjetivo = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $addToSet: {
            objetivos: { ...args.campos },
          },
        },
        { new: true }
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
  },
};

export { resolversProyecto };
