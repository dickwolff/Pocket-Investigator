import { Component, OnInit } from "@angular/core";
import { version } from "../../../package.json";
import { SoundService } from "../shared/services/sound/sound.service";
import { SettingsService } from "../shared/services/settings/settings.service";
import { GameSettings } from "../shared/services/settings/gameSettings.interface";

@Component({
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {

  /**
   * User settings for the game.
   */
  public settings: GameSettings;

  /**
   * The version of the game.
   */
  public gameVersion: string = version;

  constructor(
    private readonly soundService: SoundService,
    private readonly settingsService: SettingsService) { }

  /**
   * Load the settings.
   */
  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  /**
   * Toggle between mute and unmute the music in the game.
   */
  public toggleMusic(): void {
    this.soundService.playSoundEffect("button");
    this.soundService.toggleMute();
  }

  /**
   * Toggle between mute and unmute the music in the game.
   */
  public toggleSoundEffects(): void {
    this.soundService.playSoundEffect("button");
    this.soundService.toggleSoundEffects();
  }
}
