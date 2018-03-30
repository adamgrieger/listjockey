import { Reducer } from 'redux';

import * as types from './action-types';
import * as models from './action-models';
import { AuthTokens } from '../../api/spotify/models/authorization.models';

export interface SessionState {
  tokens: AuthTokens;
  user: SpotifyApi.CurrentUsersProfileResponse;
  error: Error;
}

export const SESSION_INITIAL_STATE: SessionState = {
  tokens: {
    accessToken: null,
    expiresOn: 0,
    refreshToken: null
  },
  user: null,
  error: null
};

const load = (state: SessionState, action: models.LoadAction): SessionState => {
  const accessToken = localStorage.getItem('accessToken');
  const expiresOn = +localStorage.getItem('expiresOn');
  const refreshToken = localStorage.getItem('refreshToken');

  return {
    ...state,
    tokens: {
      accessToken,
      expiresOn,
      refreshToken
    }
  };
};

const spotifyLoginFailure = (
  state: SessionState,
  action: models.SpotifyLoginFailureAction
): SessionState => ({
  ...state,
  error: action.payload
});

const spotifyLoginSuccess = (
  state: SessionState,
  action: models.SpotifyLoginSuccessAction
): SessionState => ({
  ...state,
  tokens: action.payload
});

const spotifyLogout = (state: SessionState, action: models.SpotifyLogoutAction) => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('expiresOn');
  localStorage.removeItem('refreshToken');

  return SESSION_INITIAL_STATE;
};

const updateTokenFailure = (
  state: SessionState,
  action: models.UpdateTokenFailureAction
): SessionState => ({
  ...state,
  error: action.payload
});

const updateTokenSuccess = (
  state: SessionState,
  action: models.UpdateTokenSuccessAction
): SessionState => ({
  ...state,
  tokens: {
    ...state.tokens,
    ...action.payload
  }
});

const updateUserFailure = (
  state: SessionState,
  action: models.UpdateUserFailureAction
): SessionState => ({
  ...state,
  error: action.payload
});

const updateUserSuccess = (
  state: SessionState,
  action: models.UpdateUserSuccessAction
): SessionState => ({
  ...state,
  user: action.payload
});

export const sessionReducer: Reducer<SessionState> = (
  state: SessionState = SESSION_INITIAL_STATE,
  action: models.SessionAction
): SessionState => {
  switch (action.type) {
    case types.LOAD: return load(state, action);
    case types.SPOTIFY_LOGIN_FAILURE: return spotifyLoginFailure(state, action);
    case types.SPOTIFY_LOGIN_SUCCESS: return spotifyLoginSuccess(state, action);
    case types.SPOTIFY_LOGOUT: return spotifyLogout(state, action);
    case types.UPDATE_TOKEN_FAILURE: return updateTokenFailure(state, action);
    case types.UPDATE_TOKEN_SUCCESS: return updateTokenSuccess(state, action);
    case types.UPDATE_USER_FAILURE: return updateUserFailure(state, action);
    case types.UPDATE_USER_SUCCESS: return updateUserSuccess(state, action);
    default: return state;
  }
};
