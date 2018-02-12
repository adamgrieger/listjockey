import { NgModule } from '@angular/core';

import { SessionActions } from './services/actions.service';
import { SessionEpics } from './services/epics.service';

@NgModule({
  providers: [ SessionActions, SessionEpics ]
})
export class SessionModule { }
