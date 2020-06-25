import { Component } from "@angular/core";

@Component({
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent {

  public go(): void {
    window.location.href = "/menu";
  }
}
