import { NgModule } from '@angular/core';

import { RoomActions } from './services/actions.service';
import { RoomEpics } from './services/epics.service';

@NgModule({
  providers: [ RoomActions, RoomEpics ]
})
export class RoomModule { }
