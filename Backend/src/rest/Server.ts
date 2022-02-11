import express from "express";
import { Express } from 'express-serve-static-core'
import { Routes } from './Routes'
import cors from 'cors'

export class Server {
    private readonly server: Express;
    private readonly routes : Routes;

    constructor(test: Boolean, routes: Routes) {
        this.routes = routes;
        let server = this.configureServer();
        if (!test)
            this.setPort(server, 8080);
        this.server = server;
    }

    private configureServer(): Express {
        let server = express();
        server.use(cors())
        server.use(express.json());
        server.use("/api/games", this.routes.getRouter());
        return server;
    }

    private setPort(server: Express, port: number) {
        server.listen(port, () => {
            console.log(`Listening on http://localhost:${port}`);
        });
    }

    getServer(): Express {
        return this.server;
    }
}