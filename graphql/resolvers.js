import { resolversUsuario } from '../models/usuario/resolvers.js';
import {resolversProyecto}  from "../models/proyecto/resolvers.js";
import {resolversAvance}  from "../models/avance/resolvers.js";

export const resolvers = [
  resolversUsuario,
  resolversProyecto,
  resolversAvance
];
