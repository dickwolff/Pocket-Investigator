import { Component } from "@angular/core";
import { version } from "../../../package.json";
import { Router } from "@angular/router";
import { SoundService } from "../shared/services/sound/sound.service";

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
  constructor(
    private readonly router: Router,
    private readonly soundService: SoundService) { }

  /**
   * Navigate to given page.
   *
   * @param page: The page to navigate to.
   */
  public async goTo(page: string): Promise<void> {

    // Play the sound before navigation.
    await this.soundService.playSoundEffect("button");

    // And navigate.
    this.router.navigate([page]);
  }
}
