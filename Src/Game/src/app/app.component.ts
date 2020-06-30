import { Component, OnInit, HostListener } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { SoundService } from "./shared/services/sound/sound.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  constructor(
    private soundService: SoundService,
    private translateService: TranslateService) { }

  @HostListener("window:popstate", ["$event"])
  async onBackButton(event): Promise<void> {
    await this.soundService.playSoundEffect("button");
  }

  ngOnInit(): void {

    // Set the default language.
    this.translateService.setDefaultLang("en");
    this.translateService.use("en");

    // Play theme song.
    this.soundService.playSong("retro_forest");
  }
}
