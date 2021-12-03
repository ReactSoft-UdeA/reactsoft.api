import { gql } from "apollo-server-express";
import { typesEnums } from "../models/enums/types.js";
import { typesInscription } from "../models/inscription/types.js";
import { typesProject } from "../models/project/types.js";
import { typesUser } from "../models/user/types.js";

const globalTypes = gql`
  scalar Date
`;

export const types = [
  globalTypes,
  typesEnums,
  typesInscription,
  typesUser,
  typesProject,
];
