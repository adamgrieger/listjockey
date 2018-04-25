import { NgModule } from '@angular/core';
import { DevToolsExtension, NgRedux, NgReduxModule } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';

import { ChatModule } from '../chat/chat.module';
import { CHAT_INITIAL_STATE } from '../chat/reducers';
import { ChatEpics } from '../chat/services/epics.service';
import { DevicesModule } from '../devices/devices.module';
import { DEVICES_INITIAL_STATE } from '../devices/reducers';
import { DevicesEpics } from '../devices/services/epics.service';
import { ROOM_LIST_INITIAL_STATE } from '../room-list/reducers';
import { RoomListModule } from '../room-list/room-list.module';
import { RoomListEpics } from '../room-list/services/epics.service';
import { ROOM_INITIAL_STATE } from '../room/reducers';
import { RoomModule } from '../room/room.module';
import { RoomEpics } from '../room/services/epics.service';
import { SEARCH_INITIAL_STATE } from '../search/reducers';
import { SearchModule } from '../search/search.module';
import { SearchEpics } from '../search/services/epics.service';
import { SESSION_INITIAL_STATE } from '../session/reducers';
import { SessionEpics } from '../session/services/epics.service';
import { SessionModule } from '../session/session.module';
import { AppState } from './models';
import { rootReducer } from './reducers';

@NgModule({
  imports: [
    NgReduxModule,
    SessionModule,
    RoomListModule,
    RoomModule,
    DevicesModule,
    SearchModule,
    ChatModule
  ]
})
export class StoreModule {

  constructor(
    private store: NgRedux<AppState>,
    private devTools: DevToolsExtension,
    private session: SessionEpics,
    private roomList: RoomListEpics,
    private room: RoomEpics,
    private devices: DevicesEpics,
    private search: SearchEpics,
    private chat: ChatEpics
  ) {

    const INITIAL_STATE: AppState = {
      session: SESSION_INITIAL_STATE,
      roomList: ROOM_LIST_INITIAL_STATE,
      room: ROOM_INITIAL_STATE,
      devices: DEVICES_INITIAL_STATE,
      search: SEARCH_INITIAL_STATE,
      chat: CHAT_INITIAL_STATE
    };

    const middleware = [
      createEpicMiddleware(session.getCombinedEpics()),
      createEpicMiddleware(roomList.getCombinedEpics()),
      createEpicMiddleware(room.getCombinedEpics()),
      createEpicMiddleware(devices.getCombinedEpics()),
      createEpicMiddleware(search.getCombinedEpics()),
      createEpicMiddleware(chat.getCombinedEpics())
    ];

    let enhancers = [ ];

    if (devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer()];
    }

    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      middleware,
      enhancers
    );
  }
}
