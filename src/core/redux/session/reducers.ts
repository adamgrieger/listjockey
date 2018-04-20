import { Reducer } from 'redux';

import { AuthTokens } from '../../api/spotify/models/authorization.models';
import * as models from './action-models';
import * as types from './action-types';

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

export const sessionReducer: Reducer<SessionState> = (
  state: SessionState = SESSION_INITIAL_STATE,
  action: models.SessionAction
): SessionState => {
  switch (action.type) {

    case types.LOAD:
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

    case types.SPOTIFY_LOGIN_FAILURE:
      return { ...state, error: action.payload };

    case types.SPOTIFY_LOGIN_SUCCESS:
      return { ...state, tokens: action.payload };

    case types.SPOTIFY_LOGOUT:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('expiresOn');
      localStorage.removeItem('refreshToken');

      return SESSION_INITIAL_STATE;

    case types.UPDATE_TOKEN_FAILURE:
      return { ...state, error: action.payload };

    case types.UPDATE_TOKEN_SUCCESS:
      return {
        ...state,
        tokens: {
          ...state.tokens,
          ...action.payload
        }
      };

    case types.UPDATE_USER_FAILURE:
      return { ...state, error: action.payload };

    case types.UPDATE_USER_SUCCESS:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
