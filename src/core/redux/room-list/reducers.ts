import { Reducer } from 'redux';

import { RoomListing } from '../../api/listjockey/models/room-list.models';
import { GET_ROOMS_FAILURE, GET_ROOMS_SUCCESS } from './action-types';
import { GetRoomsFailureAction, GetRoomsSuccessAction, RoomListAction } from './models';

export type RoomListState = {
  rooms: RoomListing[],
  error: Error
};

export const ROOM_LIST_INITIAL_STATE: RoomListState = {
  rooms: null,
  error: null
};

const getRoomsFailure = (state: RoomListState, action: GetRoomsFailureAction): RoomListState => ({
  ...state, error: action.payload
});

const getRoomsSuccess = (state: RoomListState, action: GetRoomsSuccessAction): RoomListState => ({
  ...state, rooms: action.payload
});

export const roomListReducer: Reducer<RoomListState> = (
  state: RoomListState = ROOM_LIST_INITIAL_STATE,
  action: RoomListAction
): RoomListState => {
  switch (action.type) {
    case GET_ROOMS_FAILURE: return getRoomsFailure(state, action);
    case GET_ROOMS_SUCCESS: return getRoomsSuccess(state, action);
    default: return state;
  }
};
