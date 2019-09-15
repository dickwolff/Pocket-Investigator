import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ClockService {

  public clock: BehaviorSubject<Date>;

  private updateTimer: NodeJS.Timer;

  constructor() {
    this.clock = new BehaviorSubject<Date>(new Date());
  }

  /**
   * Start the clock.
   */
  public start(): void {

    // Send the current time as the initial state.
    this.clock.next(new Date());

    // Stop an existing timer (if present), so there won't be multiple clocks running.
    if (typeof this.updateTimer !== "undefined") {
      this.stop();
    }

    // Start an interval that runs every second.
    this.updateTimer = setInterval(() => {

      this.clock.next(new Date());

    }, 1000);
  }

  /**
   * Stop the clocsk.
   */
  public stop(): void {
    if (typeof this.updateTimer !== "undefined") {
      clearInterval(this.updateTimer);
      this.updateTimer = undefined;
    }
  }
}
