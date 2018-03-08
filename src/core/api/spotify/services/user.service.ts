import 'rxjs/add/observable/fromPromise';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GlobalsService } from '../../../services/globals.service';

@Injectable()
export class SpotifyUserService {

  constructor(private globals: GlobalsService) { }

  public getCurrentUser = () => Observable.fromPromise(this.globals.spotify.getMe());
}
