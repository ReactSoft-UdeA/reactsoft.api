import { gql } from "apollo-server-express";

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto(lider: String): Proyecto
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
    ProyectosInscritos(_id: String!): [Inscripcion]
  }

  type Mutation {
    crearInscripcion(proyecto: String!, estudiante: String!): Inscripcion

    aprobarInscripcion(id: String!): Inscripcion
    
    rechazarInscripcion(id: String!): Inscripcion
  }
`;

export { tiposInscripcion };
