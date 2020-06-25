import { Component } from "@angular/core";
import { version } from "../../../package.json";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {

  /**
   * The version of the game.
   */
  public gameVersion: string = version;

  /**
   * Constructor.
   */
  constructor(private readonly router: Router) { }

  /**
   * Navigate to Game.
   */
  public play(): void {
    //this.router.navigate(["game"]); <- Doesn't exist yet.
  }

  /**
   * Navigate to Stats.
   */
  public stats(): void {
    //this.router.navigate(["stats"]); <- Doesn't exist yet.
  }

  /**
   * Navigate to Settings.
   */
  public settings(): void {
    this.router.navigate(["settings"]);
  }
}
