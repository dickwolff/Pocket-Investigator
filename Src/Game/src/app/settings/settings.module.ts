import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SettingsComponent } from "./settings.component";

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    TranslateModule.forChild()
  ],
  providers: [
  ],
  bootstrap: [SettingsComponent]
})
export class SettingsModule { }
