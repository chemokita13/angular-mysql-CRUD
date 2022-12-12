import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { Game } from "../models/Game"; // Game interface

@Injectable({
    providedIn: "root",
})
export class GamesService {
    API_URI = "http://localhost:4000/api";

    constructor(private http: HttpClient) {}

    public getGames() {
        // Gets all games stored
        return this.http.get(this.API_URI + "/game");
    }

    public getGame(id: string) {
        // Gets only one game
        return this.http.get(this.API_URI + "/game/" + id);
    }

    public saveGame(game: Game) {
        // Saves a game
        return this.http.post(this.API_URI + "/game", game);
    }

    public deleteGame(id: string) {
        // Deletes a game
        return this.http.delete(this.API_URI + "/game/" + id);
    }

    public updateGame(id: string, updatedGame: Game) {
        // Updates a game
        return this.http.put(this.API_URI + "/game/" + id, updatedGame);
    }
}
