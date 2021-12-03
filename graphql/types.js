import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos.js';
import { tiposProyecto } from '../models/proyecto/tipos.js';
import { tiposUsuario } from '../models/usuario/tipos.js';

const tiposGlobales = gql`
  scalar Date
`;

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
    
        EditarAvance(
            _id:ID,
            fechaAvance:String!,
            descripcionAvance:String!,
            observaciones:[String],
            proyecto:String!,
            usuarioRegistra:String!
        ):Avance    
    
        EliminarAvance(_id:String!):Avance    
    }



export const tipos = [
  tiposGlobales,
  tiposUsuario,
  tiposEnums,
  tiposProyecto
]`;