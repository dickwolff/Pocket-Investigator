import { DatabaseService } from "../core/database.service";
import { DexieService } from "../core/dexie.service";
import { User } from "../../domain/user.interface";

const databaseName = "PocketIbvestigator";
const tableName = "savegame";

export class SaveDatabase extends DatabaseService<User> {

  constructor() {
    super(new DexieService(databaseName), tableName, {
      savegame: "username" // Set the index on the username.
    });
  }
}
