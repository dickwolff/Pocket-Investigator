import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpLoaderFactory } from "./app.module.factories";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { ServicesModule } from "./shared/services/services.module";
import { LoaderModule } from "./loader/loader.module";
import { GameModule } from "./game/game.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameModule,
    HttpClientModule,
    LoaderModule,
    RouterModule.forRoot(routes),
    ServicesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
