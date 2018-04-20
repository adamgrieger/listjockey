import { Reducer } from 'redux';

import { RoomListing } from '../../api/listjockey/models/rooms.models';
import * as models from './action-models';
import * as types from './action-types';

export type RoomListState = {
  rooms: RoomListing[],
  error: Error
};

export const ROOM_LIST_INITIAL_STATE: RoomListState = {
  rooms: null,
  error: null
};

export const roomListReducer: Reducer<RoomListState> = (
  state: RoomListState = ROOM_LIST_INITIAL_STATE,
  action: models.RoomListAction
): RoomListState => {
  switch (action.type) {

    case types.GET_ROOMS_FAILURE:
      return { ...state, error: action.payload };

    case types.GET_ROOMS_SUCCESS:
      return { ...state, rooms: action.payload };

    case types.CREATE_ROOM_FAILURE:
      return { ...state, error: action.payload };

    case types.CREATE_ROOM_SUCCESS:
      return { ...state, rooms: [...state.rooms, action.payload] };

    default:
      return state;
  }
};
