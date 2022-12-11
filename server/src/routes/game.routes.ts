import { Router } from "express";

// game controller
import gameController from "../controllers/game.controller";

class gameRouter {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get("/", gameController.index);
    }
}

export default new gameRouter().router;
