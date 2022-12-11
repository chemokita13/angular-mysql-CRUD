import { Request, Response } from "express"; // types by express

import db from "../db";

class GameController {
    public async getAll(_req: Request, res: Response): Promise<void> {
        const queryResult = await db.query("SELECT * FROM game");
        res.json(queryResult[0]);
    }
    public async getOne(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            console.log(id);
            const queryResult = await db.query(
                "SELECT * from game WHERE id = ?",
                [id]
            );

            res.json(queryResult[0]);
        } catch (error) {
            res.status(404).json({ message: "error, game not exists" });
        }
    }
    public async newItem(req: Request, res: Response): Promise<void> {
        const savedItem = await db.query("INSERT INTO game SET ?", [req.body]);
        res.json(savedItem);
    }
    public async deleteItem(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const deletedGame = await db.query("DELETE FROM game WHERE id = ?", [
            id,
        ]);
        res.json(deletedGame);
    }
    public async updateItem(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const updatedGame = await db.query("UPDATE game set ? WHERE id = ?", [
            req.body,
            id,
        ]);
        res.json(updatedGame);
    }
}

export default new GameController();
