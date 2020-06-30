import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent {

  constructor(private readonly router: Router) { }

  // Temp nav.
  public go(): void {
    this.router.navigate(["menu"], { replaceUrl: true });
  }
}
