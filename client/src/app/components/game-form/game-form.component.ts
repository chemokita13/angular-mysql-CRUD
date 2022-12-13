import { Component } from "@angular/core";

import { Game } from "src/app/models/Game";
import { GamesService } from "src/app/services/games.service";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-game-form",
    templateUrl: "./game-form.component.html",
    styleUrls: ["./game-form.component.css"],
})
export class GameFormComponent {
    // font awesome icons
    faTrash = faTrash;

    game: Game = {
        id: undefined,
        title: "",
        description: "",
        img: "",
        created_at: undefined,
    };
    constructor(private gamesService: GamesService) {}

    saveNewGame() {
        // That params are created by back-end
        delete this.game.id;
        delete this.game.created_at;

        this.gamesService.saveGame(this.game).subscribe({
            next: (res) => {
                console.log(res);
            },
            error: (err) => console.error(err),
        });
    }
}
