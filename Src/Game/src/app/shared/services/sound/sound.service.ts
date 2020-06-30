import { Injectable } from "@angular/core";
import { SettingsService } from "../settings/settings.service";

@Injectable()
export class SoundService {

  private songs: string[] = [
    "Retro_Forest"
  ];

  private activeSong: HTMLAudioElement;

  constructor(private readonly settingsService: SettingsService) { }

  /**
   * Play a song by given name.
   *
   * @param name The song to play.
   */
  public playSong(name: string) {

    // Check wether the song actually exists.
    if (!this.songs.includes(name)) {
      throw new Error(`The song ${name} does not exist!`);
    }

    // Create the audio object to play the requested song.
    let audio = new Audio();
    audio.src = `./assets/music/${name}.mp3`;
    audio.load();

    // If a song is active, pause it.
    if (this.activeSong) {
      this.activeSong.pause();
      this.activeSong = null;
    }

    // Overwrite (or assign) the active song.
    this.activeSong = audio;

    // Play audio.
    this.activeSong.play();
  }

  /**
   * Toggle between mute and unmute.
   */
  public toggleMute(): void {

    // Toggle value.
    this.activeSong.volume = this.activeSong.volume === 0 ? 1 : 0;

    // Save preferences.
    this.updatePreferences();
  }

  private updatePreferences(): void {

    // Get current settings.
    let settings = this.settingsService.getSettings();

    // Set musicOn value based on volume of active song.
    settings.musicOn = this.activeSong.volume === 0 ? false : true;

    // Update the settings.
    this.settingsService.updateSettings(settings);
  }
}
