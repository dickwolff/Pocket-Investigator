import { NgModule } from "@angular/core";
import { GameComponent } from "./game.component";
import { ComponentsModule } from "../shared/components/components.module";
import { ServicesModule } from "../shared/services/services.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    ServicesModule,
    ComponentsModule,
    TranslateModule.forChild()
  ],
  providers: [
  ],
  bootstrap: [GameComponent]
})
export class GameModule { }
