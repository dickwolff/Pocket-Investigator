export interface Financial {

  /**
   * The amount of money the user currently has.
   */
  balance: number;

  /**
   * The amount of money the user gets per hour.
   */
  income: number;

  /**
   * The amount of money the user has to pay per hour.
   */
  outcome: number;
}
