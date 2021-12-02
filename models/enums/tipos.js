import { gql } from 'apollo-server-express';

const tiposEnums = gql`
  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }
`;

export { tiposEnums };
