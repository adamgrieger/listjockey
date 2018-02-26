import { RoomListing } from '../../api/listjockey/models/room-list.models';
import { GET_ROOMS, GET_ROOMS_FAILURE, GET_ROOMS_SUCCESS } from './action-types';
import { GetRoomsAction, GetRoomsFailureAction, GetRoomsSuccessAction } from './models';

export const getRooms = (): GetRoomsAction => ({ type: GET_ROOMS });

export const getRoomsFailure = (error: Error): GetRoomsFailureAction => ({
  type: GET_ROOMS_FAILURE,
  payload: error
});

export const getRoomsSuccess = (rooms: RoomListing[]): GetRoomsSuccessAction => ({
  type: GET_ROOMS_SUCCESS,
  payload: rooms
});
