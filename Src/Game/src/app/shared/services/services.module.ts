import { NgModule } from "@angular/core";
import { SaveGameService } from "./save-game/save-game.service";

@NgModule({
  imports: [
    SaveGameService
  ],
  exports: [
    SaveGameService
  ]
})
export class ServicesModule { }
