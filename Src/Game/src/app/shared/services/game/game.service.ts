import { Injectable, OnDestroy } from "@angular/core";
import { ClockService } from "../clock/clock.service";
import { Subscription } from "rxjs";

@Injectable()
export class GameService implements OnDestroy {

  private clockSubscription: Subscription;

  constructor(private clockService: ClockService) { }

  /**
   * Act on the OnDestroy lifecycle event.
   */
  public ngOnDestroy(): void {

    // Stop the game loop on destroying the service.
    this.stop();
  }

  /**
   * Start the game loop.
   */
  public async startAsync(): Promise<void> {

    // To prevent multiple loops, unsubscribe to any existing subscriptions.
    if (typeof this.clockService !== "undefined") {
      this.clockSubscription.unsubscribe();
    }

    // Start the game loop (tick every second).
    this.clockSubscription = this.clockService.clock.subscribe(async () => {
      console.log("Tick");
      await this.loopAsync();
    });
  }

  /**
   * Stop the game loop.
   */
  public stop(): void {

    // If there is an active subscription, stop it.
    if (typeof this.clockService !== "undefined") {
      this.clockSubscription.unsubscribe();
    }
  }

  private async loopAsync(): Promise<void> {

    // Do game magic.
  }
}
