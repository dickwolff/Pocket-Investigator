import { Component } from "@angular/core";
import { User } from "../../domain/user.interface";
import { SaveGameService } from "../../services/save-game/save-game.service";
import { Subscription } from "rxjs";

@Component({
  selector: "pd-statusbar",
  templateUrl: "./statusbar.component.html",
  styleUrls: ["./statusbar.component.scss"]
})
export class StatusbarComponent {

  private saveGameStateSubscription: Subscription;

  public user: User;

  constructor(private saveGameService: SaveGameService) {

    // Subscribe to changes to the save state.
    this.listen();
  }

  private listen(): void {

    // If there is an active subscription, stop it.
    if (typeof this.saveGameStateSubscription !== "undefined") {
      this.saveGameStateSubscription.unsubscribe();
    }

    // Subscribe to changes of the save state, and update the local object if it changes.
    this.saveGameStateSubscription = this.saveGameService.saveState.subscribe((save: User) => {
      this.user = save;
    });
  }
}
