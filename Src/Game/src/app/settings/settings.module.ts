import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SettingsComponent } from "./settings.component";
import { SettingsService } from "../shared/services/settings/settings.service";

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    TranslateModule.forChild()
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [SettingsComponent]
})
export class SettingsModule { }
