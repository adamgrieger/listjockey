import * as types from './action-types';
import * as models from './models';

export const load = (): models.LoadAction => ({ type: types.LOAD });

export const login = (): models.LoginAction => ({ type: types.LOGIN });

export const loginFailure = (error: Error): models.LoginFailureAction => ({
  type: types.LOGIN_FAILURE,
  payload: error
});

export const loginSuccess = (
  accessToken: string,
  expiresOn: number,
  refreshToken: string
): models.LoginSuccessAction => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    accessToken,
    expiresOn,
    refreshToken
  }
});

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
