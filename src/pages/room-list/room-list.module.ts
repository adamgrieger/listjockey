import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RoomListPage } from './room-list';
import { RoomListItem } from './room-list-item/room-list-item';

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
