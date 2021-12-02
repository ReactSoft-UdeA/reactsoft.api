import {gql} from 'apollo-server-express'

const typeDefs = gql`{

    type avance{
        _id:ID!,
        fechaAvance:String!,
        descripcionAvance:String!,
        observaciones:Array<String>!,
        proyecto:Number!,
        usuarioRegistra:Number!
    }
    
    type Query{
        avances:[avance]
    }
}`;

export {typeDefs};