import { Component } from "@angular/core";

import { GamesService } from "../../services/games.service";

@Component({
    selector: "app-game-list",
    templateUrl: "./game-list.component.html",
    styleUrls: ["./game-list.component.css"],
})
export class GameListComponent {
    constructor(private gamesService: GamesService) {}

    ngOnInit() {
        // on start page
        this.gamesService.getGames().subscribe({
            next: (res) => console.log(res),
            error: (err) => console.log(err),
        });
    }
}
