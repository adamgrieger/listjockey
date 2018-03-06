import { Reducer } from 'redux';

import * as types from './action-types';
import * as models from './action-models';
import { AuthTokens } from '../../api/spotify/models/authorization.models';

export type SessionState = {
  tokens: AuthTokens,
  error: Error
};

export const SESSION_INITIAL_STATE: SessionState = {
  tokens: {
    accessToken: null,
    expiresOn: 0,
    refreshToken: null
  },
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

export const sessionReducer: Reducer<SessionState> = (
  state: SessionState = SESSION_INITIAL_STATE,
  action: models.SessionAction
): SessionState => {
  switch (action.type) {
    case types.LOAD: return load(state, action);
    case types.SPOTIFY_LOGIN_FAILURE: return spotifyLoginFailure(state, action);
    case types.SPOTIFY_LOGIN_SUCCESS: return spotifyLoginSuccess(state, action);
    case types.SPOTIFY_LOGOUT: return spotifyLogout(state, action);
    default: return state;
  }
};
