import { NgModule } from '@angular/core';

import { ListJockeyRoomListService } from './services/room-list.service';
import { ListJockeyRoomService } from './services/room.service';

@NgModule({
  providers: [
    ListJockeyRoomListService,
    ListJockeyRoomService
  ]
})
export class ListJockeyModule { }
