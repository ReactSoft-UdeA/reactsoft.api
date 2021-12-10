
import { resolversInscripciones } from "../models/inscripcion/resolvers.js";
import { resolversUsuario } from '../models/usuario/resolvers.js';
import {resolversProyecto}  from "../models/proyecto/resolvers.js";
import {resolversAvance}  from "../models/avance/resolvers.js";
import { resolversAutenticacion } from "./autenticacion/resolvers.js";

export const resolvers = [
  resolversInscripciones,
  resolversUsuario,
  resolversProyecto,
  resolversAvance,
  resolversAutenticacion
];

