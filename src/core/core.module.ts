import { NgModule } from '@angular/core';

import { ListJockeyModule } from './api/listjockey/listjockey.module';
import { SpotifyModule } from './api/spotify/spotify.module';
import { StoreModule } from './redux/store/store.module';
import { GlobalsService } from './services/globals.service';

@NgModule({
  imports: [
    StoreModule,
    ListJockeyModule,
    SpotifyModule
  ],
  providers: [ GlobalsService ]
})
export class CoreModule { }
