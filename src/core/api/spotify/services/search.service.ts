import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GlobalsService } from '../../../services/globals.service';

@Injectable()
export class SpotifySearchService {

  constructor(private globals: GlobalsService) { }

  public searchTracks = (query: string) =>
    Observable.fromPromise(this.globals.spotify.searchTracks(query, { limit: 5 }))
}
