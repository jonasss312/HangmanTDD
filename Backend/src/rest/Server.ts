import express from "express";
import bodyParser from 'body-parser';
import {Express} from 'express-serve-static-core'
const routes = require('./Router')


export async function createServer(): Promise<Express> {
    const server = express();
    const port = 8080;

    server.use(bodyParser.json())
    server.use("/api/games", routes)

    server.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`);
    });

    return server;
}