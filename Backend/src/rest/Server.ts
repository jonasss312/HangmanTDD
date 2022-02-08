import express from "express";
import bodyParser from 'body-parser';
import { Express } from 'express-serve-static-core'
import { createRouter } from './Router'

export function createServer(): Express {
    const server = express();
    server.use(bodyParser.json())
    server.use("/api/games", createRouter())
    return server;
}