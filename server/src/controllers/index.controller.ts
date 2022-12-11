import { Request, Response } from "express";

class indexController {
    public index(_req: Request, res: Response) {
        res.json("hello world");
    }
}

export default new indexController();
