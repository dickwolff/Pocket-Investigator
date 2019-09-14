import { NgModule } from "@angular/core";
import { SaveGameService } from "./services/save-game/save-game.service";

@NgModule({
  imports: [
    SaveGameService
  ],
  exports: [
    SaveGameService
  ]
})
export class ServicesModule { }
