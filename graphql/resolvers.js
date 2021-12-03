import { resolversInscriptions } from "../models/inscription/resolvers.js";
import { resolversUser } from "../models/user/resolvers.js";
import { resolversProject } from "../models/project/resolvers.js";

export const resolvers = [
  resolversUser,
  resolversProject,
  resolversInscriptions,
];
