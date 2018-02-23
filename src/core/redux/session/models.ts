import * as types from './action-types';

export type SessionAction =
  | LoadAction
  | LoginAction
  | LoginFailureAction
  | LoginSuccessAction
  | LogoutAction
  | UpdateTokenAction
  | UpdateTokenFailureAction
  | UpdateTokenSuccessAction
  | UpdateUserAction
  | UpdateUserFailureAction
  | UpdateUserSuccessAction
  ;

export type LoadAction = {
  type: typeof types.LOAD
};

export type LoginAction = {
  type: typeof types.LOGIN
};

export type LoginFailureAction = {
  type: typeof types.LOGIN_FAILURE,
  payload: Error
};

export type LoginSuccessAction = {
  type: typeof types.LOGIN_SUCCESS,
  payload: {
    accessToken: string;
    expiresOn: number;
    refreshToken: string;
  }
};

export type LogoutAction = {
  type: typeof types.LOGOUT
};

export type UpdateTokenAction = {
  type: typeof types.UPDATE_TOKEN,
  payload: string
};

export type UpdateTokenFailureAction = {
  type: typeof types.UPDATE_TOKEN_FAILURE,
  payload: Error
};

export type UpdateTokenSuccessAction = {
  type: typeof types.UPDATE_TOKEN_SUCCESS,
  payload: string
};

export type UpdateUserAction = {
  type: typeof types.UPDATE_USER,
  payload: string
};

export type UpdateUserFailureAction = {
  type: typeof types.UPDATE_USER_FAILURE,
  payload: Error
};

export type UpdateUserSuccessAction = {
  type: typeof types.UPDATE_USER_SUCCESS,
  payload: SpotifyApi.UserObjectPrivate
};
