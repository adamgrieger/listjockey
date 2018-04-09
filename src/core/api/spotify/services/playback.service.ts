import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { GlobalsService } from '../../../services/globals.service';

@Injectable()
export class SpotifyPlaybackService {

  constructor(private globals: GlobalsService, private http: Http) { }

  public seek = (positionMs: number) =>
    this.http.put(`https://api.spotify.com/v1/me/player/seek?position_ms=${ positionMs }`, null, {
      headers: new Headers({
        'Authorization': `Bearer ${ this.globals.spotify.getAccessToken() }`
      })
    })

  public play = (songID: string, songPosition = 0) =>
    this.http.put('https://api.spotify.com/v1/me/player/play', {
      uris: [ `spotify:track:${ songID }` ]
    }, {
      headers: new Headers({
        'Authorization': `Bearer ${ this.globals.spotify.getAccessToken() }`
      })
    })
}
