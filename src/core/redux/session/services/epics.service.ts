import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'spotify-web-api-js';

import { Injectable } from '@angular/core';
import { Store } from 'redux';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { SpotifyAuthorizationService } from '../../../api/spotify/services/authorization.service';
import { AppState } from '../../store/models';
import { loginFailure, loginSuccess } from '../action-creators';
import { LOAD, LOGIN } from '../action-types';
import { LoadAction, LoginAction, SessionAction } from '../models';

@Injectable()
export class SessionEpics {

  constructor(private spotify: SpotifyAuthorizationService) { }

  public getCombinedEpics = () => combineEpics(this.load, this.login);

  public load = (action$: ActionsObservable<SessionAction>, store: Store<AppState>) =>
    action$.ofType(LOAD)
      .switchMap((action: LoadAction) => {
        const session = store.getState().session;
        const expiresOn = session.expiresOn;
        const tokenExpired = expiresOn < Date.now();

        if (tokenExpired) {
          return Observable.of(loginFailure(Error('Token expired')));
        }
      })

  public login = (action$: ActionsObservable<SessionAction>, store: Store<AppState>) =>
    action$.ofType(LOGIN)
      .switchMap((action: LoginAction) =>
        this.spotify.getLoginUrl()
          .do(url => window.open(url))
          .concatMap(() =>
            this.spotify.onAuthTokensSent()
              .do(tokens => {
                window.close();
                localStorage.setItem('accessToken', tokens.accessToken);
                localStorage.setItem('expiresOn', `${ tokens.expiresOn }`);
                localStorage.setItem('refreshToken', tokens.refreshToken);
              })
              .map(tokens =>
                loginSuccess(
                  tokens.accessToken,
                  tokens.expiresOn,
                  tokens.refreshToken
                )
              )
              .catch(err => Observable.of(loginFailure(err)))
          )
          .catch(err => Observable.of(loginFailure(err)))
      )
}
