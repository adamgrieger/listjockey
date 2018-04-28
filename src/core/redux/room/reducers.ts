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
  users: [],
  error: null
};

export const roomReducer: Reducer<RoomState> = (
  state: RoomState = ROOM_INITIAL_STATE,
  action: models.RoomAction
): RoomState => {
  switch (action.type) {

    case types.GET_ROOM_FAILURE:
      return { ...state, error: action.payload };

    case types.GET_ROOM_SUCCESS:
      return { ...state, current: action.payload };

    case types.GET_USERS_FAILURE:
      return { ...state, error: action.payload };

    case types.GET_USERS_SUCCESS:
      return { ...state, users: action.payload };

    case types.ADD_USER:
      return {
        ...state,
        users: [ ...state.users, action.payload ]
      };

    case types.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.username !== action.payload.username)
      };

    case types.JOIN_ROOM_FAILURE:
      return { ...state, error: action.payload };

    case types.LEAVE_ROOM:
      return ROOM_INITIAL_STATE;

    case types.LEAVE_ROOM_FAILURE:
      return { ...state, error: action.payload };

    case types.ADD_SONG_FAILURE:
      return { ...state, error: action.payload };

    case types.UPDATE_QUEUE:
      return {
        ...state,
        current: {
          ...state.current,
          play_queue: {
            songs: [
              ...state.current.play_queue.songs,
              action.payload
            ]
          }
        }
      };

    case types.NEXT_SONG:
      return {
        ...state,
        current: {
          ...state.current,
          play_queue: {
            songs: state.current.play_queue.songs ? state.current.play_queue.songs.slice(1) : []
          },
          now_playing: state.current.play_queue.songs ? state.current.play_queue.songs[0] : null
        }
      };

    default:
      return state;
  }
};
