import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  async ngOnInit() {

    // Start the game.
    await this.startGame();
  }

  /**
   * Start the game mechanics.
   */
  public async startGame(): Promise<void> {

    // Step 1. Load save game.
  }
}
