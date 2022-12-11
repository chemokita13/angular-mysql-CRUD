import { Router } from "express";

// game controller
import gameController from "../controllers/game.controller";

class gameRouter {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // create the routes
        this.router.get("/", gameController.getAll);
        this.router.get("/:id", gameController.getOne);
        this.router.post("/", gameController.newItem);
        this.router.delete("/:id", gameController.deleteItem);
        this.router.put("/:id", gameController.updateItem);
    }
}

export default new gameRouter().router;
