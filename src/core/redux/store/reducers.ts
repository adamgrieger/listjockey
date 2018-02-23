import { combineReducers, Reducer } from 'redux';

import { roomListReducer } from '../room-list/reducers';
import { sessionReducer } from '../session/reducers';
import { AppState } from './models';

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  session: sessionReducer,
  roomList: roomListReducer
});
