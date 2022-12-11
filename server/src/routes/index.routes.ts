import { Router } from "express";

// index controller
import indexController from "../controllers/index.controller";

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // create the routes
        this.router.get("/", indexController.index);
    }
}

export default new IndexRoutes().router;
