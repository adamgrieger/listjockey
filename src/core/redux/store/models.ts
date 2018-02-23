import { RoomListState } from '../room-list/reducers';
import { SessionState } from '../session/reducers';

export interface AppState {
  session: SessionState;
  roomList: RoomListState;
}
