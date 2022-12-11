import { Request, Response } from "express";

class GameController {
    public index(_req: Request, res: Response) {
        res.json("hello game");
    }
}

export default new GameController();
