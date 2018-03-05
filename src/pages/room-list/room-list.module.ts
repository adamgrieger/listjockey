import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CoreModule } from '../../core/core.module';
import { CreateRoomForm } from './create-room-form/create-room-form';
import { RoomListPage } from './room-list';
import { RoomListItem } from './room-list-item/room-list-item';

@NgModule({
  declarations: [
    RoomListPage,
    RoomListItem,
    CreateRoomForm
  ],
  imports: [
    IonicPageModule.forChild(RoomListPage),
    CoreModule
  ]
})
export class RoomListPageModule { }
