import { Injectable } from '@angular/core';
import * as SpotifyWebApi from 'spotify-web-api-js';

@Injectable()
export class GlobalsService {

  private _spotify = new SpotifyWebApi();

  public get spotify() {
    return this._spotify;
  }
}
