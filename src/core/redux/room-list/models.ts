import * as types from './action-types';
import { RoomListing } from '../../api/listjockey/models/room-list.models';

export type RoomListAction =
  | GetRoomsAction
  | GetRoomsFailureAction
  | GetRoomsSuccessAction
  ;

export type GetRoomsAction = {
  type: typeof types.GET_ROOMS
};

export type GetRoomsFailureAction = {
  type: typeof types.GET_ROOMS_FAILURE,
  payload: Error
};

export type GetRoomsSuccessAction = {
  type: typeof types.GET_ROOMS_SUCCESS,
  payload: RoomListing[]
};
