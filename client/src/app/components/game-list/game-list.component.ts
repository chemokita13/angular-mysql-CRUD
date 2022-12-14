import { Component } from "@angular/core";

import { GamesService } from "../../services/games.service";

// import game interface
import { Game } from "../../models/Game";

import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-game-list",
    templateUrl: "./game-list.component.html",
    styleUrls: ["./game-list.component.css"],
})
export class GameListComponent {
    storedGames: any = []; // I dont know what i did wrong but if i dont put :any code sohws error

    // font awesome icons
    faPencil = faPencil;
    faTrash = faTrash;

    constructor(private gamesService: GamesService) {}

    ngOnInit() {
        // on start page
        this.getGames();
    }

    getGames() {
        this.gamesService.getGames().subscribe({
            next: (res) => {
                this.storedGames = res;
                console.log(this.storedGames);
            },
            error: (err) => console.log(err),
        });
    }

    deleteGame(id: string) {
        this.gamesService.deleteGame(id).subscribe({
            next: (res) => this.getGames(),
            error: (err) => console.error(err),
        });
    }
}
