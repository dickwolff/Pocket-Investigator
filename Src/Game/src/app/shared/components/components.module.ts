import { NgModule } from "@angular/core";
import { StatusbarComponent } from "./statusbar/statusbar.component";
import { ServicesModule } from "../services/services.module";

@NgModule({
  declarations: [
    StatusbarComponent
  ],
  imports: [
    ServicesModule
  ],
  exports: [
    StatusbarComponent
  ]
})
export class ComponentsModule { }
