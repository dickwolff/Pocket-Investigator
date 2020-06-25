import { Component } from "@angular/core";
import { version } from "../../../package.json";

@Component({
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent {

  /**
   * The version of the game.
   */
  public gameVersion: string = version;
}
