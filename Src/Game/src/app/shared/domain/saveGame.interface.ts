export interface SaveGame {
  /**
   * The name of the user currently playing the game.
   */
  username: string;

  /**
   * The level of the user.
   */
  level: number;

  /**
   * The reputation of the user.
   */
  reputation: number;
}
