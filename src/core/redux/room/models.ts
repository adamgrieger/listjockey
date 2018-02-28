import { Room } from '../../api/listjockey/models/room.models';
import { GET_ROOM, GET_ROOM_FAILURE, GET_ROOM_SUCCESS } from './action-types';

export type RoomAction =
  | GetRoomAction
  | GetRoomFailureAction
  | GetRoomSuccessAction
  ;

export type GetRoomAction = {
  type: typeof GET_ROOM,
  id: number
};

export type GetRoomFailureAction = {
  type: typeof GET_ROOM_FAILURE,
  payload: Error
};

export type GetRoomSuccessAction = {
  type: typeof GET_ROOM_SUCCESS,
  payload: Room;
};
