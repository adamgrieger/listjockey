import { combineReducers, Reducer } from 'redux';

import { sessionReducer } from '../session/reducers';
import { AppState } from './models';

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  session: sessionReducer
});
