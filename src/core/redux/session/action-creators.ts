import { User } from '../../api/listjockey/models/user.models';
import { AuthTokens } from '../../api/spotify/models/authorization.models';
import * as models from './action-models';
import * as types from './action-types';

// +------+
// | Load |
// +------+

export const load = (): models.LoadAction => ({ type: types.LOAD });

// +---------------+
// | Spotify Login |
// +---------------+

export const spotifyLogin = (): models.SpotifyLoginAction => ({ type: types.SPOTIFY_LOGIN });

export const spotifyLoginFailure = (error: Error): models.SpotifyLoginFailureAction => ({
  type: types.SPOTIFY_LOGIN_FAILURE,
  payload: error
});

export const spotifyLoginSuccess = (tokens: AuthTokens): models.SpotifyLoginSuccessAction => ({
  type: types.SPOTIFY_LOGIN_SUCCESS,
  payload: tokens
});

// +----------------+
// | Spotify Logout |
// +----------------+

export const spotifyLogout = (): models.SpotifyLogoutAction => ({ type: types.SPOTIFY_LOGOUT });

// +------------------+
// | ListJockey Login |
// +------------------+

export const listjockeyLogin = (user: User) => ({ type: types.LISTJOCKEY_LOGIN });

export const listjockeyLoginFailure = (error: Error): models.ListJockeyLoginFailureAction => ({
  type: types.LISTJOCKEY_LOGIN_FAILURE,
  payload: error
});

export const listjockeyLoginSuccess = (): models.ListJockeyLoginSuccessAction => ({
  type: types.LISTJOCKEY_LOGIN_SUCCESS
});

// +-------------------+
// | ListJockey Logout |
// +-------------------+

export const listjockeyLogout = (user: User) => ({ type: types.LISTJOCKEY_LOGOUT });

export const listjockeyLogoutFailure = (error: Error) => ({
  type: types.LISTJOCKEY_LOGOUT_FAILURE,
  payload: error
});

export const listjockeyLogoutSuccess = () => ({ type: types.LISTJOCKEY_LOGOUT_SUCCESS });

// +--------------+
// | Update Token |
// +--------------+

export const updateToken = (refreshToken: string): models.UpdateTokenAction => ({
  type: types.UPDATE_TOKEN,
  payload: refreshToken
});

export const updateTokenFailure = (error: Error): models.UpdateTokenFailureAction => ({
  type: types.UPDATE_TOKEN_FAILURE,
  payload: error
});

export const updateTokenSuccess = (accessToken: string): models.UpdateTokenSuccessAction => ({
  type: types.UPDATE_TOKEN_SUCCESS,
  payload: accessToken
});

// +-------------+
// | Update User |
// +-------------+

export const updateUser = (accessToken: string): models.UpdateUserAction => ({
  type: types.UPDATE_USER,
  payload: accessToken
});

export const updateUserFailure = (error: Error): models.UpdateUserFailureAction => ({
  type: types.UPDATE_USER_FAILURE,
  payload: error
});

export const updateUserSuccess = (
  user: SpotifyApi.UserObjectPrivate
): models.UpdateUserSuccessAction => ({
  type: types.UPDATE_USER_SUCCESS,
  payload: user
});
