import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader.component";
import { MaterialModule } from "../material.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    MaterialModule,
    TranslateModule.forChild()
  ],
  providers: [
  ],
  bootstrap: [LoaderComponent]
})
export class LoaderModule { }
