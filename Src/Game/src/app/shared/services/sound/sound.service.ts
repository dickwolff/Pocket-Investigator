import { Injectable } from "@angular/core";
import { SettingsService } from "../settings/settings.service";

@Injectable()
export class SoundService {

  private songs: string[] = [
    "retro_forest"
  ];

  private soundEffects: string[] = [
    "button"
  ];

  private activeSong: HTMLAudioElement = new Audio();
  private activeSound: HTMLAudioElement = new Audio();

  constructor(private readonly settingsService: SettingsService) {

    // Load settings and set volume based on previous settings.
    const settings = this.settingsService.getSettings();
    this.activeSong.volume = settings.musicOn ? 1 : 0;
    this.activeSound.volume = settings.soundOn ? 1 : 0;
  }

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

      // Save current sound level (in case of muted by preference).
      audio.volume = this.activeSong.volume;

      // Clear the audio.
      this.activeSong.pause();
      this.activeSong = null;
    }

    // Overwrite (or assign) the active song.
    this.activeSong = audio;

    // Play audio.
    this.activeSong.play();
  }

  /**
   * Play a sound effect by given name.
   *
   * @param name The sound effect to play.
   */
  public playSoundEffect(name: string) {

    // Check wether the sound effect actually exists.
    if (!this.soundEffects.includes(name)) {
      throw new Error(`The sound effect ${name} does not exist!`);
    }

    // Create the audio object to play the requested sound effect.
    let audio = new Audio();
    audio.src = `./assets/sounds/${name}.wav`;
    audio.load();
    audio.autoplay = false;

    // If a sound effect is active, pause it.
    if (this.activeSound) {

      // Save current sound level (in case of muted by preference).
      audio.volume = this.activeSound.volume;

      // Clear the audio.
      this.activeSound.pause();
      this.activeSound = null;
    }

    // Overwrite (or assign) the active sound effect.
    this.activeSound = audio;

    // Play audio.
    this.activeSound.play();
  }

  /**
   * Toggle between mute and unmute.
   */
  public toggleMute(): void {

    // Load current setting.
    const settings = this.settingsService.getSettings();

    // Toggle value (inverted, on is off and vice versa).
    this.activeSong.volume = settings.musicOn ? 0 : 1;

    // Save preferences.
    this.updatePreferences();
  }

  /**
   * Toggle between mute and unmute for sound effects.
   */
  public toggleSoundEffects(): void {

    // Toggle value.
    this.activeSound.volume = this.activeSound.volume === 0 ? 1 : 0;

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
