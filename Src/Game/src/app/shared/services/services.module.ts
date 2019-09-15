import { NgModule } from "@angular/core";
import { SaveGameService } from "./save-game/save-game.service";
import { ClockService } from "./clock/clock.service";
import { GameService } from "./game/game.service";

@NgModule({
  providers: [
    ClockService,
    GameService,
    SaveGameService
  ]
})
export class ServicesModule { }
