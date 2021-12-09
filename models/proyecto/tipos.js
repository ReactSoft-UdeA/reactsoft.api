import { gql } from "apollo-server-express";

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

  type proyectosAdmin {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    objetivos: [Objetivo]
  }

  type HU_012 {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
  }

  type HU_014 {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
  }

  type proyectoRegistradoLider {
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

  type HU_007 {
    _id: ID!
    nombre: String!
    estado: Enum_EstadoProyecto!
  }

  type HU_008 {
    _id: ID!
    nombre: String!
    estado: Enum_EstadoProyecto!
  }

  type Query {
    Proyectos: [Proyecto]
    proyectosAdmin: [proyectosAdmin]
    proyectoRegistradoLider(_id: String!): proyectoRegistradoLider
  }
  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto!
      fase: Enum_FaseProyecto!
      lider: String!
      objetivos: [crearObjetivo]
    ): Proyecto

    editarProyecto(_id: String!, campos: camposProyecto!): Proyecto

    crearObjetivo(idProyecto: String!, campos: camposObjetivo!): Proyecto

    editarObjetivo(
      idProyecto: String!
      indexObjetivo: Int!
      campos: camposObjetivo!
    ): Proyecto

    eliminarObjetivo(idProyecto: String!, idObjetivo: String!): Proyecto
  }
`;

export { tiposProyecto };
