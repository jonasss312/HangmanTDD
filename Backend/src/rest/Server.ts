import express from "express";
import bodyParser from 'body-parser';
import {Express} from 'express-serve-static-core'
const routes = require('./Router')


export async function createServer(): Promise<Express> {
    const server = express();
    const port = 8080; // default port to listen

    // define a route handler for the default home page
    server.get("/", (req: any, res: any) => {
        res.send("Hello")
    });

    server.use(bodyParser.json())
    server.use("/api/games", routes)
    // start the express server
    server.listen(port, () => {
        // tslint:disable-next-line:no-console
        console.log(`Listening on http://localhost:${port}`);
    });

    return server;
}