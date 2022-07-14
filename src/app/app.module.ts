import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { PlaylistcreationComponent } from './playlist-creation/playlist-creation.component';
import { TrackComponent } from './track/track.component';
import { PlaylistSaveComponent } from './playlist-save/playlist-save.component';
import { PlaylistViewComponent } from './playlist-view/playlist-view.component';
import { CurrentTracksComponent } from './current-tracks/current-tracks.component';

// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>  new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [AppComponent, PlayerComponent, SearchComponent, MainMenuComponent, SearchFilterPipe, PlaylistcreationComponent, TrackComponent, PlaylistSaveComponent, PlaylistViewComponent, CurrentTracksComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    NgIdleKeepaliveModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
