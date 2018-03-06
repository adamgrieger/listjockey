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
import { spotifyLoginFailure, spotifyLoginSuccess } from '../action-creators';
import { LoadAction, SessionAction, SpotifyLoginAction } from '../action-models';
import { LOAD, SPOTIFY_LOGIN } from '../action-types';

@Injectable()
export class SessionEpics {

  constructor(private spotify: SpotifyAuthorizationService) { }

  public getCombinedEpics = () => combineEpics(this.load, this.login);

  public load = (action$: ActionsObservable<SessionAction>, store: Store<AppState>) =>
    action$.ofType(LOAD)
      .switchMap((action: LoadAction) => {
        const session = store.getState().session;
        const expiresOn = session.tokens.expiresOn;
        const tokenExpired = expiresOn < Date.now();

        if (tokenExpired) {
          return Observable.of(spotifyLoginFailure(Error('Token expired')));
        }
      })

  public login = (action$: ActionsObservable<SessionAction>, store: Store<AppState>) =>
    action$.ofType(SPOTIFY_LOGIN)
      .switchMap((action: SpotifyLoginAction) =>
        this.spotify.getLoginUrl()
          .map(url => window.open(url))
          .concatMap(window =>
            this.spotify.onAuthTokensSent()
              .do(tokens => {
                localStorage.setItem('accessToken', tokens.accessToken);
                localStorage.setItem('expiresOn', `${ tokens.expiresOn }`);
                localStorage.setItem('refreshToken', tokens.refreshToken);
                window.close();
              })
              .map(tokens => spotifyLoginSuccess(tokens))
              .catch(err => Observable.of(spotifyLoginFailure(err)))
          )
          .catch(err => Observable.of(spotifyLoginFailure(err)))
      )
}
