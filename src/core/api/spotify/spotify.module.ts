import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SpotifyAuthorizationService } from './services/authorization.service';
import { SpotifyUserService } from './services/user.service';

@NgModule({
  imports: [ HttpModule ],
  providers: [
    SpotifyAuthorizationService,
    SpotifyUserService
  ]
})
export class SpotifyModule { }
