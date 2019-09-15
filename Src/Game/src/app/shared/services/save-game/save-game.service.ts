import { Injectable } from "@angular/core";
import { SaveDatabase } from "../../database/save-database/save.database";
import { BehaviorSubject } from "rxjs";
import { User } from "../../domain/user.interface";

@Injectable()
export class SaveGameService {

  public saveState: BehaviorSubject<User>;

  constructor(private saveDatabase: SaveDatabase) { }

  /**
   * Save a new state of the user to the database.
   *
   * @param user The new state of the user.
   */
  public async saveGameAsync(user: User): Promise<void> {

    // Save the change to the database.
    await this.saveDatabase.updateAsync(user.username, user);

    // Push the changes to components that are interested in the user object.
    this.saveState.next(user);
  }
}
