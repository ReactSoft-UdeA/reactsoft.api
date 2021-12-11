import {gql} from 'apollo-server-express';

const tiposAutenticacion = gql `

    type Token{
        token: String
        error: String
    }
    
    type Mutation {
        registro(
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            rol: Enum_Rol!
            clave: String!
            estado: Enum_EstadoUsuario
        ): Token!
        login(
            correo: String!
            clave: String!       
        ):Token
    }
    


`;
export {tiposAutenticacion};