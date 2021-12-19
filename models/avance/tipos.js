import { gql } from "apollo-server-express";

const tiposAvance = gql`

  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  type Query {
    Avances: [Avance]
    Avance(_id: String!): Avance
    filtrarAvance(_id: String!): [Avance]
  }
  type Mutation {
    crearAvance(fecha: Date!, descripcion: String!, proyecto: String!, creadoPor: String!): Avance
    editarAvanceObs(_id:String!,observaciones:String):Avance
    editarAvance(_id: String!, fecha: Date!, descripcion: String!): Avance
  }
  `;

export { tiposAvance };
