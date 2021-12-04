import { gql } from "apollo-server-express";

const tiposAvances = gql`
  type Usuario {
    nombre: String!
  }

  type Avance {
    _id: ID!
    fechaAvance: String!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  type Query {
    Usuarios: [Usuario]
    Avances(_id:String): [Avance]
  }

  type Mutation {
    CrearAvance(
      fechaAvance: String!
      descripcion: String!
      observaciones: [String]
      proyecto: String!
      creadoPor: String!
    ): Avance

    EditarAvance(
      _id: ID
      fechaAvance: String
      descripcion: String!
      observaciones: [String]
      proyecto: String!
      creadoPor: String!
    ): Avance

    EliminarAvance(_id: String!): Avance
  }
`;

export { tiposAvances };
