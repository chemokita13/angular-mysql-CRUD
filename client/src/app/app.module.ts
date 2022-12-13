import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { GameFormComponent } from "./components/game-form/game-form.component";
import { GameListComponent } from "./components/game-list/game-list.component";

import { HttpClientModule } from "@angular/common/http";

import { GamesService } from "./services/games.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        GameFormComponent,
        GameListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        FormsModule,
    ],
    providers: [GamesService],
    bootstrap: [AppComponent],
})
export class AppModule {}
