import { InscriptionModel } from '../inscripcion/inscripcion.js';
import { UserModel } from '../usuario/usuario.js';
import { ProjectModel } from './proyecto.js';

const resolversProyecto = {
  Proyecto: {
    lider: async (parent, args, context) => {
      const usr = await UserModel.findOne({
        _id: parent.lider.toString(),
      });
      return usr;
    },
  },
  Query: {
    Proyectos: async (parent, args, context) => {
      const proyectos = await ProjectModel.find()
      .populate('lider')
      .populate('avances')
      .populate('inscripciones');
      return proyectos;
    },
     HU_006: async(parent, args, context) => {
      const HU006 = await ProjectModel.find();
      return HU006;
    }, 
    HU_017: async(parent, args, context) => {
        const HU017 = await ProjectModel.findOne({_id: args._id})
            .populate('lider')
            .populate('avances')
            .populate('inscripciones');
        return HU017;
    },
    HU_019: async(parent, args, context) => {
        const HU019 = await ProjectModel.find();
        return HU019;
    },
    },
    Mutation: {
      crearProyecto: async (parent, args, context) => {
        const proyectoCreado = await ProjectModel.create({
          nombre: args.nombre,
          estado: args.estado,
          fase: args.fase,
          fechaInicio: args.fechaInicio,
          fechaFin: args.fechaFin,
          presupuesto: args.presupuesto,
          lider: args.lider,
          objetivos: args.objetivos
        });
      return proyectoCreado;
    },
    editarProyecto: async (parent, args, context) => {
      const editado = await ProjectModel.findByIdAndUpdate(
        args._id,
        { ...args.campos },
        { new: true }
      );

      return editado;
    },
    crearObjetivo: async (parent, args, context) => {
      const proyectoyObjetivo = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $addToSet: {
            objetivos: { ...args.campos },
          },
        },
        { new: true }
      );

      return proyectoyObjetivo;
    },
    editarObjetivo: async (parent, args, context) => {
      const editado = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $set: {
            [`objetivos.${args.indexObjetivo}.descripcion`]: args.campos.descripcion,
            [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
          },
        },
        { new: true }
      );
      return editado;
    },
    eliminarObjetivo: async (parent, args, context) => {
      const objetivo = await ProjectModel.findByIdAndUpdate(
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
      return objetivo;
    },
    HU_007: async (parent, args, context) => {
      const HU007 = await ProjectModel.findByIdAndUpdate(args.id, {
          estado: 'ACTIVO',
      },{new: true});
      return HU007;
    },
    HU_008: async (parent, args, context) => {
        const HU008 = await ProjectModel.findByIdAndUpdate(args.id, {
            estado: args.estado,
        },{new: true});
        return HU008;
    },
    HU_012: async (parent, args, context) => {
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
    HU_014: async (parent, args, context) => {
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