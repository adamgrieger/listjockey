import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/concatMap';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SignalR } from 'ng2-signalr';
import { Observable } from 'rxjs/Observable';

import { SERVER_HOST } from '../../../../app/config';
import { GlobalsService } from '../../../services/globals.service';
import { AuthTokens, RefreshedToken } from '../models/authorization.models';

@Injectable()
export class SpotifyAuthorizationService {

  constructor(private globals: GlobalsService, private http: Http, private signalr: SignalR) { }

  public getLoginUrl = () =>
    this.http.get(`${ SERVER_HOST }/auth/login`)
      .map(res => res.text())

  public onAuthTokensSent = (authState: string) =>
    Observable.fromPromise(this.signalr.connect({ hubName: 'AuthHub', qs: { authState } }))
      .concatMap(conn => conn.listenFor<AuthTokens>('onAuthTokensSent'))

  public updateToken = (refreshToken: string) =>
    this.http.get(`${ SERVER_HOST }/auth/refresh/${ refreshToken }`)
      .map(res => res.json() as AuthTokens)
}
