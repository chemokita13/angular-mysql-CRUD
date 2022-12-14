import { Component } from "@angular/core";

import { Game } from "src/app/models/Game";
import { GamesService } from "src/app/services/games.service";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute, Router } from "@angular/router";

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

    edit: Boolean = false; // The default form have to create a game, but sometimes have to edit a game.

    constructor(
        private gamesService: GamesService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        const params = this.activatedRoute.snapshot.params;
        if (params["id"]) {
            this.gamesService.getGame(params["id"]).subscribe({
                next: (res) => {
                    // it have to be an edit form not create form
                    this.edit = true;
                    // res is an object like [{game}], THIS HAVE TO BE AN ARRAY NOT AN OBJECT and i cant do something like res[0]
                    ///console.log(Object.values(res)[0], typeof [res]);
                    this.game = { ...Object.values(res)[0] };
                },
                error: (err) => console.error(err),
            });
        }
    }

    saveNewGame() {
        // That params are created by back-end
        delete this.game.id;
        delete this.game.created_at;

        this.gamesService.saveGame(this.game).subscribe({
            next: (res) => {
                console.log(res);
                this.router.navigate(["/games"]);
            },
            error: (err) => console.error(err),
        });
    }

    updateGame() {
        delete this.game.created_at;
        this.game.id &&
            this.gamesService.updateGame(this.game.id, this.game).subscribe({
                next: (res) => {
                    console.log(res);
                    this.router.navigate(["/games"]);
                },
                error: (err) => console.error(err),
            });
    }
}
