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

  type projectFaseEstado{
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio:Date!
    fechaFin:Date!
    estado:Enum_EstadoProyecto!
    fase:Enum_FaseProyecto!
    # lider:Usuario!
    # objetivos:[Objetivo]
    }

  type Query {
    Proyectos: [Proyecto]
    ProyectosPorId(_id: String!): [Proyecto]
    ProyectosPorLider(_id: String!): [Proyecto]
    ProyectoEstadoFase(_id: String!): Proyecto
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

    proyectoFaseEstado(
      _id: String!
      estado:Enum_EstadoProyecto!
      fase:Enum_FaseProyecto!
    ): projectFaseEstado

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
