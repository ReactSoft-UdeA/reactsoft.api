import { gql } from 'apollo-server-express';

const tiposEnums = gql`
  enum Enum_EstadoUsuario {
    Pendiente
    Autorizado
    No_Autorizado
  }

  enum Enum_Rol {
    Estudiante
    Lider
    Administrador
  }
`;

export { tiposEnums };
