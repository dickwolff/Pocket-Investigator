import { Injectable } from "@angular/core";
import { GameSettings } from "./gameSettings.interface";

@Injectable()
export class SettingsService {

  /**
   * Save new settings.
   *
   * @param newSettings The new value to save.
   */
  public updateSettings(newSettings: GameSettings): void {

    // Store (changed) settings.
    localStorage.setItem("pi_preferences", JSON.stringify(newSettings));
  }

  /**
   * Get current settings.
   */
  public getSettings(): GameSettings {

    // First load current settings (if present).
    let settings = JSON.parse(localStorage.getItem("pi_preferences"));

    // If there were no settings, create default.
    if (!settings) {
      settings = {
        musicOn: true,
        soundOn: true
      }
    }

    // Return the settings.
    return settings;
  }
}
