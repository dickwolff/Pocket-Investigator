import { Component } from "@angular/core";
import { version } from "../../../package.json";
import { SoundService } from "../shared/services/sound/sound.service";

@Component({
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent {

  /**
   * The version of the game.
   */
  public gameVersion: string = version;

  constructor(private readonly soundService: SoundService) { }

  /**
   * Toggle between mute and unmute the music in the game.
   */
  public toggleMusic(): void {
    this.soundService.toggleMute();
  }
}
