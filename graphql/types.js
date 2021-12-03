import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/tipos.js";
import { tiposProyecto } from "../models/proyecto/tipos.js";
import { tiposUsuario } from "../models/usuario/tipos.js";
import { tiposAvances } from "../models/avance/tipos.js";
import { tiposInscripcion } from "../models/inscripcion/tipos.js";

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposInscripcion,
  tiposUsuario,
  tiposEnums,
  tiposProyecto,
  tiposAvances,
];
