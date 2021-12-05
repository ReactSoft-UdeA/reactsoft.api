import { gql } from 'apollo-server-express';

const tiposProyecto = gql`

  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input camposObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input camposProyecto {
    nombre: String
    presupuesto: Float
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }

    type HU_006{
      _id: ID!
      nombre: String!
      presupuesto: Float!
      fechaInicio:Date!
      estado:Enum_EstadoProyecto!
      fase:Enum_FaseProyecto!
      objetivos:[Objetivo]
  }

  type HU_009{
      _id: ID!
      nombre: String!
      fase:Enum_FaseProyecto!
  }

  type HU_012{
      _id: ID!
      nombre: String!
      presupuesto: Float!
      fechaInicio:Date!
      fechaFin:Date!
      estado:Enum_EstadoProyecto!
      fase:Enum_FaseProyecto!
      lider:Usuario!
      objetivos:[Objetivo]
  }
  type HU_014{
      _id: ID!
      nombre: String!
      presupuesto: Float!
      fechaInicio:Date!
      fechaFin:Date!
      estado:Enum_EstadoProyecto!
      fase:Enum_FaseProyecto!
      lider:Usuario!
      objetivos:[Objetivo]
  }
  type HU_017{
      _id: ID!
      nombre: String!
      presupuesto: Float!
      fechaInicio:Date!
      fechaFin:Date!
      estado:Enum_EstadoProyecto!
      fase:Enum_FaseProyecto!
      lider:Usuario!
      objetivos:[Objetivo]
      avances: [Avance]
      inscripciones: [Inscripcion]
  }
  type HU_007{
      _id: ID!
      nombre: String!
      estado:Enum_EstadoProyecto!
  }
  type HU_008{
      _id: ID!
      nombre: String!
      estado:Enum_EstadoProyecto!
  }
  type HU_019{
      _id: ID!
      nombre: String!
      fechaInicio:Date!
      estado:Enum_EstadoProyecto!
      objetivos:[Objetivo]
  }

  type Query {
    Proyectos: [Proyecto]
    HU_006: [HU_006]
    HU_017(_id:String!): HU_017
    HU_019: [HU_019]
  }

  type Mutation {

    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      lider: String!
      objetivos: [crearObjetivo]
    ): Proyecto
    HU_007(id: String!): HU_007
        
    HU_008(
        id: String!
        estado:Enum_EstadoProyecto!
    ): HU_008

    HU_009(
        id: String!
        fase:Enum_FaseProyecto!
    ): HU_009

    HU_012(
        nombre: String!
        presupuesto: Float!
        fechaInicio:Date!
        fechaFin:Date!
        estado:Enum_EstadoProyecto
        fase:Enum_FaseProyecto
        lider:String!
        objetivos:[crearObjetivo]
    ): HU_012
    HU_014(
        id: String!
        nombre: String!
        presupuesto: Float!
        objetivos:[camposObjetivo]
    ): HU_014

    editarProyecto(_id: String!, campos: camposProyecto!): Proyecto

    crearObjetivo(idProyecto: String!, campos: camposObjetivo!): Proyecto

    editarObjetivo(idProyecto: String!, indexObjetivo: Int!, campos: camposObjetivo!): Proyecto

    eliminarObjetivo(idProyecto: String!, idObjetivo: String!): Proyecto
    
  }

`;

export { tiposProyecto };