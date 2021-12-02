import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Usuario{
        nombre: String!
    }

    type Avance{
        _id:ID!,
        fechaAvance:String!,
        descripcionAvance:String!,
        observaciones:[String],
        proyecto:String!,
        usuarioRegistra:String!
    }

    type Query{
        Usuarios:[Usuario]
        Avances:[Avance]
    }

    type Mutation{
        CrearAvance(
            fechaAvance:String!,
            descripcionAvance:String!,
            observaciones:[String],
            proyecto:String!,
            usuarioRegistra:String!
        ):Avance
    }

`;

export {typeDefs};