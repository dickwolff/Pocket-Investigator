import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    TranslateModule.forChild()
  ],
  providers: [
  ],
  bootstrap: [LoaderComponent]
})
export class LoaderModule { }
