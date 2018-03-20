import { NgModule } from '@angular/core';

import { DevicesActions } from './services/actions.service';
import { DevicesEpics } from './services/epics.service';

@NgModule({
  providers: [ DevicesActions, DevicesEpics ]
})
export class DevicesModule { }
