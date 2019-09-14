import { DatabaseService } from "../core/database.service";
import { DexieService } from "../core/dexie.service";
import { SaveGame } from "../../domain/saveGame.interface";

const databaseName = "amios";
const tableName = "spoorkaart";

export class SaveDatabase extends DatabaseService<SaveGame> {

  constructor() {
    super(new DexieService(databaseName), tableName, {
      savegame: "username" // Put the index on the username.
    });
  }
}
