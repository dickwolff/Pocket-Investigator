import Dexie from "dexie";

/**
 * Wrapper for Dexie.
 */
export class DexieService extends Dexie {

  public constructor(databaseName: string) {
    super(databaseName);
  }
}
