import { NgModule } from '@angular/core';
import { DevToolsExtension, NgRedux, NgReduxModule } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';

import { environment } from '../../../environments/environment';
import { SESSION_INITIAL_STATE } from '../session/reducers';
import { SessionEpics } from '../session/services/epics.service';
import { SessionModule } from '../session/session.module';
import { AppState } from './models';
import { rootReducer } from './reducers';

@NgModule({
  imports: [ NgReduxModule, SessionModule ]
})
export class StoreModule {

  constructor(
    private store: NgRedux<AppState>,
    private devTools: DevToolsExtension,
    private session: SessionEpics
  ) {

    const INITIAL_STATE: AppState = {
      session: SESSION_INITIAL_STATE
    };

    const middleware = createEpicMiddleware(session.getCombinedEpics());

    let enhancers = [ ];

    if (!environment.production) {
      enhancers = [ devTools.enhancer() ];
    }

    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [ middleware ],
      enhancers
    );
  }
}
