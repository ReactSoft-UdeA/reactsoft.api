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

  enum Enum_EstadoProyecto{
        ACTIVO
        INACTIVO
  }

  enum Enum_FaseProyecto{
        INICIADO
        DESARROLLO
        TERMINADO
        NULO
    }

    enum Enum_TipoObjetivo{
        GENERAL
        ESPECIFICO
    }

`;

export { tiposEnums };
