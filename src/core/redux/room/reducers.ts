import { Reducer } from 'redux';

import { Room } from '../../api/listjockey/models/rooms.models';
import { User } from '../../api/listjockey/models/users.models';
import * as models from './action-models';
import * as types from './action-types';

export type RoomState = {
  current: Room,
  users: User[],
  error: Error
};

export const ROOM_INITIAL_STATE: RoomState = {
  current: null,
  users: null,
  error: null
};

const getRoomFailure = (state: RoomState, action: models.GetRoomFailureAction): RoomState => ({
  ...state,
  error: action.payload
});

const getRoomSuccess = (state: RoomState, action: models.GetRoomSuccessAction): RoomState => ({
  ...state,
  current: action.payload
});

const getUsersFailure = (state: RoomState, action: models.GetUsersFailureAction): RoomState => ({
  ...state,
  error: action.payload
});

const getUsersSuccess = (state: RoomState, action: models.GetUsersSuccessAction): RoomState => ({
  ...state,
  users: action.payload
});

const joinRoomFailure = (state: RoomState, action: models.JoinRoomFailureAction): RoomState => ({
  ...state,
  error: action.payload
});

const leaveRoom = (state: RoomState, action: models.LeaveRoomAction): RoomState => (
  ROOM_INITIAL_STATE
);

const leaveRoomFailure = (state: RoomState, action: models.LeaveRoomFailureAction): RoomState => ({
  ...state,
  error: action.payload
});

const addSongFailure = (state: RoomState, action: models.AddSongFailureAction): RoomState => ({
  ...state,
  error: action.payload
});

export const roomReducer: Reducer<RoomState> = (
  state: RoomState = ROOM_INITIAL_STATE,
  action: models.RoomAction
): RoomState => {
  switch (action.type) {
    case types.GET_ROOM_FAILURE: return getRoomFailure(state, action);
    case types.GET_ROOM_SUCCESS: return getRoomSuccess(state, action);
    case types.GET_USERS_FAILURE: return getUsersFailure(state, action);
    case types.GET_USERS_SUCCESS: return getUsersSuccess(state, action);
    case types.JOIN_ROOM_FAILURE: return joinRoomFailure(state, action);
    case types.LEAVE_ROOM: return leaveRoom(state, action);
    case types.LEAVE_ROOM_FAILURE: return leaveRoomFailure(state, action);
    default: return state;
  }
};
