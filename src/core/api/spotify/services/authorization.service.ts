import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/concatMap';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SignalR } from 'ng2-signalr';
import { Observable } from 'rxjs/Observable';

import { SERVER_HOST } from '../../../../app/config';
import { GlobalsService } from '../../../services/globals.service';
import { AuthTokens } from '../models/authorization.models';

@Injectable()
export class SpotifyAuthorizationService {

  constructor(private globals: GlobalsService, private http: Http, private signalr: SignalR) { }

  public getLoginUrl = () =>
    this.http.get(`${ SERVER_HOST }/auth/login`)
      .map(res => res.text())

  public getAuthHubConnection = (authState: string) =>
    Observable.fromPromise(this.signalr.connect({ hubName: 'AuthHub', qs: { authState } }))

  public tokensToLocalStorage = (tokens: AuthTokens) => {
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('expiresOn', `${ tokens.expiresOn }`);
    localStorage.setItem('refreshToken', tokens.refreshToken);
  }

  public updateToken = (refreshToken: string) =>
    this.http.get(`${ SERVER_HOST }/auth/refresh/${ refreshToken }`)
      .map(res => res.json() as AuthTokens)
}
