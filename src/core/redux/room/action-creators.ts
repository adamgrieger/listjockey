import { Room } from '../../api/listjockey/models/room.models';
import { GET_ROOM, GET_ROOM_FAILURE, GET_ROOM_SUCCESS } from './action-types';
import { GetRoomAction, GetRoomFailureAction, GetRoomSuccessAction } from './models';

export const getRoom = (roomId: number): GetRoomAction => ({
  type: GET_ROOM,
  id: roomId
});

export const getRoomFailure = (error: Error): GetRoomFailureAction => ({
  type: GET_ROOM_FAILURE,
  payload: error
});

export const getRoomSuccess = (room: Room): GetRoomSuccessAction => ({
  type: GET_ROOM_SUCCESS,
  payload: room
});
