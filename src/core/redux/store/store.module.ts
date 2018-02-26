import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';

import { ROOM_LIST_INITIAL_STATE } from '../room-list/reducers';
import { RoomListModule } from '../room-list/room-list.module';
import { RoomListEpics } from '../room-list/services/epics.service';
import { SESSION_INITIAL_STATE } from '../session/reducers';
import { SessionEpics } from '../session/services/epics.service';
import { SessionModule } from '../session/session.module';
import { AppState } from './models';
import { rootReducer } from './reducers';

@NgModule({
  imports: [ NgReduxModule, SessionModule, RoomListModule ]
})
export class StoreModule {

  constructor(
    private store: NgRedux<AppState>,
    private session: SessionEpics,
    private roomList: RoomListEpics
  ) {

    const INITIAL_STATE: AppState = {
      session: SESSION_INITIAL_STATE,
      roomList: ROOM_LIST_INITIAL_STATE
    };

    const sessionMiddleware = createEpicMiddleware(session.getCombinedEpics());
    const roomListMiddleware = createEpicMiddleware(roomList.getCombinedEpics());

    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [ sessionMiddleware, roomListMiddleware ],
      [ ]
    );
  }
}
