import { NgModule } from "@angular/core";
import { GameComponent } from "./game.component";
import { ComponentsModule } from "../shared/components/components.module";
import { ServicesModule } from "../shared/services/services.module";
import { MaterialModule } from "../material.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    ComponentsModule,
    MaterialModule,
    ServicesModule,
    TranslateModule.forChild()
  ],
  providers: [
  ],
  bootstrap: [GameComponent]
})
export class GameModule { }
