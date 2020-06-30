import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpLoaderFactory } from "./app.module.factories";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { ServicesModule } from "./shared/services/services.module";
import { LoaderModule } from "./loader/loader.module";
import { GameModule } from "./game/game.module";
import { MenuModule } from "./menu/menu.module";
import { SettingsModule } from "./settings/settings.module";
import { SoundService } from "./shared/services/sound/sound.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GameModule,
    MenuModule,
    LoaderModule,
    BrowserModule,
    ServicesModule,
    SettingsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    SoundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
