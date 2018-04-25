import { ChatState } from '../chat/reducers';
import { DevicesState } from '../devices/reducers';
import { RoomListState } from '../room-list/reducers';
import { RoomState } from '../room/reducers';
import { SearchState } from '../search/reducers';
import { SessionState } from '../session/reducers';

export interface AppState {
  session: SessionState;
  roomList: RoomListState;
  room: RoomState;
  devices: DevicesState;
  search: SearchState;
  chat: ChatState;
}
