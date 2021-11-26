import conectarBD from "./db/db.js";
import express from "express";
import cors from 'cors';
import ApolloServer from 'apollo-server-express';
import dotenv from 'dotenv';

dotenv.config();


const main = async () => {
    await conectarBD();
};

main();