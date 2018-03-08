import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Store } from 'redux';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { ListJockeyUserService } from '../../../api/listjockey/services/user.service';
import { SpotifyAuthorizationService } from '../../../api/spotify/services/authorization.service';
import { SpotifyUserService } from '../../../api/spotify/services/user.service';
import { GlobalsService } from '../../../services/globals.service';
import { AppState } from '../../store/models';
import * as creators from '../action-creators';
import * as models from '../action-models';
import * as types from '../action-types';

@Injectable()
export class SessionEpics {

  constructor(
    private globals: GlobalsService,
    private spotifyAuth: SpotifyAuthorizationService,
    private spotifyUser: SpotifyUserService,
    private listjockeyUser: ListJockeyUserService
  ) { }

  public getCombinedEpics = () =>
    combineEpics(
      this.load,
      this.spotifyLogin,
      this.listjockeyLogin,
      this.listjockeyLogout,
      this.updateUser
    )

  public load = (action$: ActionsObservable<models.SessionAction>, store: Store<AppState>) =>
    action$.ofType(types.LOAD)
      .switchMap((action: models.LoadAction) => {
        const session = store.getState().session;
        const expiresOn = session.tokens.expiresOn;
        const tokenExpired = expiresOn < Date.now();

        this.globals.spotify.setAccessToken(session.tokens.accessToken);

        return Observable.of(creators.updateUser());
      })

  public spotifyLogin = (
    action$: ActionsObservable<models.SessionAction>,
    store: Store<AppState>
  ) =>
    action$.ofType(types.SPOTIFY_LOGIN)
      .switchMap((action: models.SpotifyLoginAction) =>
        this.spotifyAuth.getLoginUrl()
          .map(url => window.open(url))
          .concatMap(window =>
            this.spotifyAuth.onAuthTokensSent()
              .do(tokens => {
                localStorage.setItem('accessToken', tokens.accessToken);
                localStorage.setItem('expiresOn', `${ tokens.expiresOn }`);
                localStorage.setItem('refreshToken', tokens.refreshToken);
                window.close();
              })
              .do(tokens => this.globals.spotify.setAccessToken(tokens.accessToken))
              .concatMap(tokens =>
                Observable.concat(
                  Observable.of(creators.spotifyLoginSuccess(tokens)),
                  Observable.of(creators.updateUser())
                )
              )
              .catch(err => Observable.of(creators.spotifyLoginFailure(err)))
          )
          .catch(err => Observable.of(creators.spotifyLoginFailure(err)))
      )

  public listjockeyLogin = (
    action$: ActionsObservable<models.ListJockeyLoginAction>,
    store: Store<AppState>
  ) =>
    action$.ofType(types.LISTJOCKEY_LOGIN)
      .switchMap((action: models.ListJockeyLoginAction) => {
        const user = store.getState().session.user;

        return this.listjockeyUser.addUser({
          username: user.id,
          display_name: user.display_name ? user.display_name : user.id,
          avatar_url: user.images[0].url
        })
        .mapTo(creators.listjockeyLoginSuccess())
        .catch(err => Observable.of(creators.listjockeyLoginFailure(err)));
      })

  public listjockeyLogout = (
    action$: ActionsObservable<models.ListJockeyLogoutAction>,
    store: Store<AppState>
  ) =>
    action$.ofType(types.LISTJOCKEY_LOGOUT)
      .switchMap((action: models.ListJockeyLogoutAction) => {
        const user = store.getState().session.user;

        return this.listjockeyUser.removeUser(user.id)
          .concatMap(() =>
            Observable.concat(
              Observable.of(
                creators.listjockeyLogoutSuccess(),
                creators.spotifyLogout()
              )
            )
          )
          .catch(err => Observable.of(creators.listjockeyLogoutFailure(err)));
      })

  public updateUser = (
    action$: ActionsObservable<models.SessionAction>,
    store: Store<AppState>
  ) =>
    action$.ofType(types.UPDATE_USER)
      .switchMap((action: models.UpdateUserAction) =>
        this.spotifyUser.getCurrentUser()
          .concatMap(user =>
            Observable.concat(
              Observable.of(creators.updateUserSuccess(user)),
              Observable.of(creators.listjockeyLogin())
            )
          )
          .catch(err => Observable.of(creators.updateUserFailure(err)))
      )
}
