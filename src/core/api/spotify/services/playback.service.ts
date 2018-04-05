import { Injectable } from '@angular/core';
import { GlobalsService } from '../../../services/globals.service';
import { Headers, Http } from '@angular/http';

@Injectable()
export class SpotifyPlaybackService {

  constructor(private globals: GlobalsService, private http: Http) { }

  public transferPlayback = (deviceID: string) =>
    this.http.put('https://api.spotify.com/v1/me/player', {
      device_ids: [ deviceID ]
    }, {
      headers: new Headers({
        'Authorization': `Bearer ${ this.globals.spotify.getAccessToken() }`
      })
    })

  public play = (songID: string, songPosition = 0) =>
    this.http.put('https://api.spotify.com/v1/me/player', {
      uris: [ songID ],
      offset: {
        position: songPosition
      }
    }, {
      headers: new Headers({
        'Authorization': `Bearer ${ this.globals.spotify.getAccessToken() }`
      })
    })
}
