import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RoomListItem } from './room-list-item/room-list-item';
import { RoomListPage } from './room-list';

@NgModule({
  declarations: [
    RoomListPage,
    RoomListItem
  ],
  imports: [
    IonicPageModule.forChild(RoomListPage)
  ]
})
export class RoomListPageModule { }
