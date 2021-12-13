import Mongoose from "mongoose";
const { ObjectId } = Mongoose.Types;
import { ProjectModel } from "./proyecto.js";

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ProjectModel.find()
        .populate("lider")
        .populate("avances")
        .populate('inscripciones');
      return proyectos;
    },
    ProyectosPorLider: async (parent, args) => {
      const proyectosLider = await ProjectModel.find({'lider':args._id})
        .populate("lider")
        .populate("avances")
        .populate('inscripciones');
      return proyectosLider;
    },
    HU_006: async(parent, args) => {
      const HU006 = await ProjectModel.find();
      return HU006;
    },
    HU_017: async(parent, args) => {
      const HU017 = await ProjectModel.findOne({_id: args._id})
        .populate('lider')
        .populate('avances')
        .populate('inscripciones');
      return HU017;
    },
    HU_019: async(parent, args) => {
        const HU019 = await ProjectModel.find();
        return HU019;
    },
    ProyectosPorId: async(parent, args)=>{
       let proyecto = await ProjectModel.find({_id:args._id}) 
        .populate('lider')
        .populate('avances')
        .populate('inscripciones');
       return proyecto;
    }
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        //estado: args.estado,
        //fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
    HU_007: async (parent, args) => {
      const HU007 = await ProjectModel.findByIdAndUpdate(args.id, {
          estado: 'ACTIVO',
      },{new: true});
      return HU007;
    },
    HU_008: async (parent, args) => {
        const HU008 = await ProjectModel.findByIdAndUpdate(args.id, {
            estado: args.estado,
        },{new: true});
        return HU008;
    },
    HU_012: async (parent, args) => {
        const HU012 = await ProjectModel.create({
            nombre: args.nombre,
            fechaInicio: args.fechaInicio,
            fechaFin: args.fechaFin,
            presupuesto: args.presupuesto,
            lider: args.lider,
            objetivos: args.objetivos
        });
        return HU012;
    },
    HU_014: async (parent, args) => {
        const HU014 = await ProjectModel.findByIdAndUpdate(args.id, {
            nombre: args.nombre,
            objetivos: args.objetivos,
            presupuesto: args.presupuesto
        },{new: true});
        return HU014;
    },
  },
};

export { resolversProyecto };
