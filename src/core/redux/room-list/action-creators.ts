import { CreateRoom, RoomListing } from '../../api/listjockey/models/rooms.models';
import {
  CREATE_ROOM,
  CREATE_ROOM_FAILURE,
  CREATE_ROOM_SUCCESS,
  GET_ROOMS,
  GET_ROOMS_FAILURE,
  GET_ROOMS_SUCCESS
} from './action-types';
import {
  CreateRoomAction,
  CreateRoomFailureAction,
  CreateRoomSuccessAction,
  GetRoomsAction,
  GetRoomsFailureAction,
  GetRoomsSuccessAction
} from './models';

export const getRooms = (): GetRoomsAction => ({ type: GET_ROOMS });

export const getRoomsFailure = (error: Error): GetRoomsFailureAction => ({
  type: GET_ROOMS_FAILURE,
  payload: error
});

export const getRoomsSuccess = (rooms: RoomListing[]): GetRoomsSuccessAction => ({
  type: GET_ROOMS_SUCCESS,
  payload: rooms
});

export const createRoom = (room: CreateRoom): CreateRoomAction => ({
  type: CREATE_ROOM,
  payload: room
});

export const createRoomFailure = (error: Error): CreateRoomFailureAction => ({
  type: CREATE_ROOM_FAILURE,
  payload: error
});

export const createRoomSuccess = (room: RoomListing): CreateRoomSuccessAction => ({
  type: CREATE_ROOM_SUCCESS,
  payload: room
});
