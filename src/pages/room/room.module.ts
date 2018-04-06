import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DeviceSelect } from './device-select/device-select';
import { RoomPage } from './room';
import { SongSearch } from './song-search/song-search';

@NgModule({
  declarations: [
    RoomPage,
    SongSearch,
    DeviceSelect
  ],
  imports: [
    IonicPageModule.forChild(RoomPage)
  ]
})
export class RoomPageModule { }
