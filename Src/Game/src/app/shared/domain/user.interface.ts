import { Financial } from "./financial.interface";

export interface User {
  /**
   * The name of the user currently playing the game.
   */
  username: string;

  /**
   * The level of the user.
   */
  level: number;

  /**
   * The job the user currently fulfills.
   */
  job: string;

  /**
   * The reputation of the user.
   */
  reputation: number;

  /**
   * The financial state of the user.
   */
  financial?: Financial;
}
