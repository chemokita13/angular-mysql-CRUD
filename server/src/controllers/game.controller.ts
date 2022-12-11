import { Request, Response } from "express"; // types by express

import db from "../db";

class GameController {
    public async getAll(_req: Request, res: Response) {
        const queryResult = await db.query("SELECT * FROM game");
        res.json(queryResult[0]);
    }
    public async getOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const queryResult = await db.query("SELECT * from game WHERE id = ?", [
            id,
        ]);
        res.json(queryResult[0]);
    }
    public async newItem(req: Request, res: Response): Promise<void> {
        await db.query("INSERT INTO game SET ?", [req.body]);
        res.json("new item saved");
    }
    public async deleteItem(req: Request, res: Response) {
        res.json("delete item");
    }
    public async updateItem(req: Request, res: Response) {
        res.json("update item");
    }
}

export default new GameController();
