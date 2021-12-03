import { resolversUsuario } from '../models/usuario/resolvers.js';
import  {resolversProyecto}  from "../models/proyecto/resolvers.js";

export const resolvers = [
  resolversUsuario,
  resolversProyecto,

];
