import conectarBD from "./db/db.js";
import express from "express";
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';
import dotenv from 'dotenv';
import {tipos} from './graphql/types.js';
import {resolvers} from './graphql/resolvers.js'

//para que nos deje utilizar las variables de entorno en toda la aplicacion
dotenv.config();

//Definir servidor GraphQL
const server = new ApolloServer({
    //Definiciones de cada uno de los modelos
    typeDefs: tipos,
    //Controladores
    resolvers: resolvers,
});

//Aplicacion express
const app = express();

//Middleware express.json, para que los request entren y salgan de tipo json
app.use(express.json());

//Middleware de cors; para poder hacer desde muchos origenes
app.use(cors());

//Puerto de escucha, onde corre el servidor
app.listen({port: process.env.PORT || 4000}, async () => {
    await conectarBD();
    await server.start();

    server.applyMiddleware({ app });

    console.log('Servidor Listo!!');
});