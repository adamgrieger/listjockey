import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { GlobalsService } from '../../../services/globals.service';
import { Device } from '../models/devices.models';

@Injectable()
export class SpotifyDevicesService {

  constructor(private globals: GlobalsService, private http: Http) { }

  public getAvailableDevices = () =>
    this.http.get('https://api.spotify.com/v1/me/player/devices', {
      headers: new Headers({
        'Authorization': `Bearer ${ this.globals.spotify.getAccessToken() }`
      })
    })
      .map(res => <Device[]>(res.json()))
}
