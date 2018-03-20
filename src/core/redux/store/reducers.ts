import { combineReducers, Reducer } from 'redux';

import { devicesReducer } from '../devices/reducers';
import { roomListReducer } from '../room-list/reducers';
import { roomReducer } from '../room/reducers';
import { sessionReducer } from '../session/reducers';
import { AppState } from './models';

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  session: sessionReducer,
  roomList: roomListReducer,
  room: roomReducer,
  devices: devicesReducer
});
