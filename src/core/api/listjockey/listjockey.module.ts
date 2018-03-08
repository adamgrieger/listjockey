import { NgModule } from '@angular/core';

import { ListJockeyRoomListService } from './services/room-list.service';
import { ListJockeyRoomService } from './services/room.service';
import { ListJockeyUserService } from './services/user.service';

@NgModule({
  providers: [
    ListJockeyRoomListService,
    ListJockeyRoomService,
    ListJockeyUserService
  ]
})
export class ListJockeyModule { }
