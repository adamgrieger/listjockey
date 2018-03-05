import * as types from './action-types';
import { RoomListing, CreateRoom } from '../../api/listjockey/models/room-list.models';

export type RoomListAction =
  | GetRoomsAction
  | GetRoomsFailureAction
  | GetRoomsSuccessAction
  | CreateRoomAction
  | CreateRoomFailureAction
  | CreateRoomSuccessAction
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

export type CreateRoomAction = {
  type: typeof types.CREATE_ROOM,
  payload: CreateRoom
};

export type CreateRoomFailureAction = {
  type: typeof types.CREATE_ROOM_FAILURE,
  payload: Error
};

export type CreateRoomSuccessAction = {
  type: typeof types.CREATE_ROOM_SUCCESS,
  payload: RoomListing
};
