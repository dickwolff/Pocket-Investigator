import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader.component";
// import { ServicesModule } from "../shared/services.module";

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    //ServicesModule
  ],
  providers: [
  ],
  bootstrap: [LoaderComponent]
})
export class LoaderModule { }
