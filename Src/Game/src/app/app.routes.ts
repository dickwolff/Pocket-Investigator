import { Routes } from "@angular/router";
import { GameComponent } from "./game/game.component";
import { LoaderComponent } from "./loader/loader.component";

export const routes: Routes = [
  // Redirect all routes to loader, because that is the starting point of the game.
  {
    path: "",
    redirectTo: "/loader",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/loader"
  },
  {
    path: "loader",
    component: LoaderComponent
  },
  {
    path: "game",
    component: GameComponent
  }
];
