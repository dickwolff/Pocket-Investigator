import { Injectable } from "@angular/core";

@Injectable()
export class SoundService {

  private songs: string[] = [
    "Retro_Forest"
  ];

  private activeSong: HTMLAudioElement;

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

    // Set volume to max.
    audio.volume = 1;

    // Overwrite (or assign) the active song.
    this.activeSong = audio;

    // Play audio.
    this.activeSong.play();
  }
}
