import { Routes, RouterModule } from "@angular/router";
import { GameComponent } from "./game/game.component";
import { LoaderComponent } from "./loader/loader.component";
import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu/menu.component";
import { SettingsComponent } from "./settings/settings.component";

export const routes: Routes = [
  // Main entry point.
  {
    path: "loader",
    component: LoaderComponent
  },

  // Menu (and options).
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },

  // Game.
  {
    path: "game",
    children: [
      {
        path: "",
        component: GameComponent
      }
    ]
  },

  // Redirect all other routes to loader, because that is the starting point of the game.
  {
    path: "",
    redirectTo: "/loader",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/loader"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
