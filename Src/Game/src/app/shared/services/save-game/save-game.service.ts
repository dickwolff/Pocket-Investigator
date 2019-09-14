import { Injectable } from "@angular/core";
import { SaveDatabase } from "../../database/save-database/save.database";

@Injectable()
export class SaveGameService {

  constructor(private saveDatabase: SaveDatabase) { }
}
