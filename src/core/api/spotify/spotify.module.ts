import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SpotifyAuthorizationService } from './services/authorization.service';

@NgModule({
  imports: [ HttpModule ],
  providers: [ SpotifyAuthorizationService ]
})
export class SpotifyModule { }
