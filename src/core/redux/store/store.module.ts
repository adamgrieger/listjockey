import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';

import { ROOM_LIST_INITIAL_STATE } from '../room-list/reducers';
import { RoomListModule } from '../room-list/room-list.module';
import { RoomListEpics } from '../room-list/services/epics.service';
import { ROOM_INITIAL_STATE } from '../room/reducers';
import { RoomModule } from '../room/room.module';
import { RoomEpics } from '../room/services/epics.service';
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
    RoomModule
  ]
})
export class StoreModule {

  constructor(
    private store: NgRedux<AppState>,
    private devTools: DevToolsExtension,
    private session: SessionEpics,
    private roomList: RoomListEpics,
    private room: RoomEpics
  ) {

    const INITIAL_STATE: AppState = {
      session: SESSION_INITIAL_STATE,
      roomList: ROOM_LIST_INITIAL_STATE,
      room: ROOM_INITIAL_STATE
    };

    const middleware = [
      createEpicMiddleware(session.getCombinedEpics()),
      createEpicMiddleware(roomList.getCombinedEpics()),
      createEpicMiddleware(room.getCombinedEpics())
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
