import { NgModule } from "@angular/core";
import { GameComponent } from "./game.component";
import { ComponentsModule } from "../shared/components/components.module";
import { ServicesModule } from "../shared/services/services.module";
// import { ServicesModule } from "../shared/services.module";

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    ComponentsModule,
    ServicesModule
  ],
  providers: [
  ],
  bootstrap: [GameComponent]
})
export class GameModule { }
