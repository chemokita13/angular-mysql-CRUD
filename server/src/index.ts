import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import indexRoutes from "./routes/index.routes";
import gameRoutes from "./routes/game.routes";

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set("port", process.env.PORT || 4000); // middleware PORT
        /* Configs */
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use("/api/game", gameRoutes);
    }

    start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server on port: ${this.app.get("port")}`);
        });
    }
}

const server = new Server();

server.start(); // start server listening
