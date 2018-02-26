import { Reducer } from 'redux';
import { Room } from '../../api/listjockey/models/room.models';
import { GetRoomFailureAction, GetRoomSuccessAction, RoomAction } from './models';
import { GET_ROOM_FAILURE, GET_ROOM_SUCCESS } from './action-types';

export type RoomState  = {
  current: Room,
  error: Error
};

export const ROOM_INITIAL_STATE: RoomState = {
  current: null,
  error: null
};

const getRoomFailure = (state: RoomState, action: GetRoomFailureAction): RoomState => ({
  ...state, error: action.payload
});

const getRoomSuccess = (state: RoomState, action: GetRoomSuccessAction): RoomState => ({
  ...state, current: action.payload
});

export const roomReducer: Reducer<RoomState> = (
  state: RoomState = ROOM_INITIAL_STATE,
  action: RoomAction
): RoomState => {
  switch (action.type) {
    case GET_ROOM_FAILURE: return getRoomFailure(state, action);
    case GET_ROOM_SUCCESS: return getRoomSuccess(state, action);
    default: return state;
  }
};
