import { Router } from "express";

class gameRouter {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get("/", (req, res) => res.send("Hello World"));
    }
}

export default new gameRouter().router;
