import { Room } from '../../api/listjockey/models/rooms.models';
import { Song } from '../../api/listjockey/models/songs.models';
import { User } from '../../api/listjockey/models/users.models';
import * as models from './action-models';
import * as types from './action-types';

// +----------+
// | Get Room |
// +----------+

export const getRoom = (id: number): models.GetRoomAction => ({
  type: types.GET_ROOM,
  payload: id
});

export const getRoomFailure = (error: Error): models.GetRoomFailureAction => ({
  type: types.GET_ROOM_FAILURE,
  payload: error
});

export const getRoomSuccess = (room: Room): models.GetRoomSuccessAction => ({
  type: types.GET_ROOM_SUCCESS,
  payload: room
});

// +-----------+
// | Get Users |
// +-----------+

export const getUsers = (id: number): models.GetUsersAction => ({
  type: types.GET_USERS,
  payload: id
});

export const getUsersFailure = (error: Error): models.GetUsersFailureAction => ({
  type: types.GET_USERS_FAILURE,
  payload: error
});

export const getUsersSuccess = (users: User[]): models.GetUsersSuccessAction => ({
  type: types.GET_USERS_SUCCESS,
  payload: users
});

// +-----------+
// | Join Room |
// +-----------+

export const joinRoom = (id: number, username: string): models.JoinRoomAction => ({
  type: types.JOIN_ROOM,
  payload: {
    id,
    username
  }
});

export const joinRoomFailure = (error: Error): models.JoinRoomFailureAction => ({
  type: types.JOIN_ROOM_FAILURE,
  payload: error
});

export const joinRoomSuccess = (): models.JoinRoomSuccessAction => ({
  type: types.JOIN_ROOM_SUCCESS
});

// +------------+
// | Leave Room |
// +------------+

export const leaveRoom = (id: number, username: string): models.LeaveRoomAction => ({
  type: types.LEAVE_ROOM,
  payload: {
    id,
    username
  }
});

export const leaveRoomFailure = (error: Error): models.LeaveRoomFailureAction => ({
  type: types.LEAVE_ROOM_FAILURE,
  payload: error
});

export const leaveRoomSuccess = (): models.LeaveRoomSuccessAction => ({
  type: types.LEAVE_ROOM_SUCCESS
});

// +----------+
// | Add Song |
// +----------+

export const addSong = (song: Song): models.AddSongAction => ({
  type: types.ADD_SONG,
  payload: song
});

export const addSongFailure = (error: Error): models.AddSongFailureAction => ({
  type: types.ADD_SONG_FAILURE,
  payload: error
});

export const addSongSuccess = (): models.AddSongSuccessAction => ({
  type: types.ADD_SONG_SUCCESS
});

// +--------------+
// | Update Queue |
// +--------------+

export const updateQueue = (song: Song): models.UpdateQueueAction => ({
  type: types.UPDATE_QUEUE,
  payload: song
});
