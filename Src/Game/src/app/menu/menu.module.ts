import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    TranslateModule.forChild()
  ],
  providers: [
  ],
  bootstrap: [MenuComponent]
})
export class MenuModule { }
