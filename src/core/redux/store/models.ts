import { RoomListState } from '../room-list/reducers';
import { RoomState } from '../room/reducers';
import { SessionState } from '../session/reducers';

export interface AppState {
  session: SessionState;
  roomList: RoomListState;
  room: RoomState;
}
