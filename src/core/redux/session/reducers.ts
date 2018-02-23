import { Reducer } from 'redux';

import * as types from './action-types';
import * as models from './models';

export type SessionState = {
  accessToken: string,
  refreshToken: string,
  expiresOn: number,
  error: Error
};

export const SESSION_INITIAL_STATE: SessionState = {
  accessToken: null,
  refreshToken: null,
  expiresOn: null,
  error: null
};

const load = (state: SessionState, action: models.LoadAction): SessionState => {
  const _accessToken = localStorage.getItem('accessToken');
  const _expiresOn = +localStorage.getItem('expiresOn');
  const _refreshToken = localStorage.getItem('refreshToken');

  return {
    ...state,
    accessToken: _accessToken,
    refreshToken: _refreshToken,
    expiresOn: _expiresOn
  };
};

const loginFailure = (state: SessionState, action: models.LoginFailureAction): SessionState => ({
  ...state, error: action.payload
});

const loginSuccess = (state: SessionState, action: models.LoginSuccessAction): SessionState => ({
  ...state,
  accessToken: action.payload.accessToken,
  refreshToken: action.payload.refreshToken,
  expiresOn: action.payload.expiresOn
});

const logout = (state: SessionState, action: models.LogoutAction) => {
  return SESSION_INITIAL_STATE;
};

export const sessionReducer: Reducer<SessionState> = (
  state: SessionState = SESSION_INITIAL_STATE,
  action: models.SessionAction
): SessionState => {
  switch (action.type) {
    case types.LOAD: return load(state, action);
    case types.LOGIN_FAILURE: return loginFailure(state, action);
    case types.LOGIN_SUCCESS: return loginSuccess(state, action);
    case types.LOGOUT: return logout(state, action);
    default: return state;
  }
};
