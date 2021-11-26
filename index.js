import conectarBD from "./db/db.js";
import { Express } from "express";
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';




const main = async () => {
    await conectarBD();
};

main();