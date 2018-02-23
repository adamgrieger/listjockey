import { NgModule } from '@angular/core';

import { RoomListActions } from './services/actions.service';
import { RoomListEpics } from './services/epics.service';

@NgModule({
  providers: [ RoomListActions, RoomListEpics ]
})
export class RoomListModule { }
