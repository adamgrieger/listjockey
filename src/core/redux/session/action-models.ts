import { User } from '../../api/listjockey/models/users.models';
import { AuthTokens, RefreshedToken } from '../../api/spotify/models/authorization.models';
import * as types from './action-types';

export type SessionAction =
  | LoadAction
  | SpotifyLoginAction
  | SpotifyLoginFailureAction
  | SpotifyLoginSuccessAction
  | SpotifyLogoutAction
  | ListJockeyLoginAction
  | ListJockeyLoginFailureAction
  | ListJockeyLoginSuccessAction
  | ListJockeyLogoutAction
  | ListJockeyLogoutFailureAction
  | ListJockeyLogoutSuccessAction
  | UpdateTokenAction
  | UpdateTokenFailureAction
  | UpdateTokenSuccessAction
  | UpdateUserAction
  | UpdateUserFailureAction
  | UpdateUserSuccessAction
  ;

// +------+
// | Load |
// +------+

export interface LoadAction {
  type: typeof types.LOAD;
}

// +---------------+
// | Spotify Login |
// +---------------+

export interface SpotifyLoginAction {
  type: typeof types.SPOTIFY_LOGIN;
}

export interface SpotifyLoginFailureAction {
  type: typeof types.SPOTIFY_LOGIN_FAILURE;
  payload: Error;
}

export interface SpotifyLoginSuccessAction {
  type: typeof types.SPOTIFY_LOGIN_SUCCESS;
  payload: AuthTokens;
}

// +----------------+
// | Spotify Logout |
// +----------------+

export interface SpotifyLogoutAction {
  type: typeof types.SPOTIFY_LOGOUT;
}

// +------------------+
// | ListJockey Login |
// +------------------+

export interface ListJockeyLoginAction {
  type: typeof types.LISTJOCKEY_LOGIN;
}

export interface ListJockeyLoginFailureAction {
  type: typeof types.LISTJOCKEY_LOGIN_FAILURE;
  payload: Error;
}

export interface ListJockeyLoginSuccessAction {
  type: typeof types.LISTJOCKEY_LOGIN_SUCCESS;
}

// +-------------------+
// | ListJockey Logout |
// +-------------------+

export interface ListJockeyLogoutAction {
  type: typeof types.LISTJOCKEY_LOGOUT;
}

export interface ListJockeyLogoutFailureAction {
  type: typeof types.LISTJOCKEY_LOGOUT_FAILURE;
  payload: Error;
}

export interface ListJockeyLogoutSuccessAction {
  type: typeof types.LISTJOCKEY_LOGOUT_SUCCESS;
}

// +--------------+
// | Update Token |
// +--------------+

export interface UpdateTokenAction {
  type: typeof types.UPDATE_TOKEN;
}

export interface UpdateTokenFailureAction {
  type: typeof types.UPDATE_TOKEN_FAILURE;
  payload: Error;
}

export interface UpdateTokenSuccessAction {
  type: typeof types.UPDATE_TOKEN_SUCCESS;
  payload: RefreshedToken;
}

// +-------------+
// | Update User |
// +-------------+

export interface UpdateUserAction {
  type: typeof types.UPDATE_USER;
}

export interface UpdateUserFailureAction {
  type: typeof types.UPDATE_USER_FAILURE;
  payload: Error;
}

export interface UpdateUserSuccessAction {
  type: typeof types.UPDATE_USER_SUCCESS;
  payload: SpotifyApi.UserObjectPrivate;
}
