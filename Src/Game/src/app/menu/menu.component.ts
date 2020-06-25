import { Component } from "@angular/core";
import { version } from "../../../package.json";

@Component({
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {

  /**
   * The version of the game.
   */
  public gameVersion: string = version;
}
