import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DeviceSelect } from './device-select/device-select';
import { NowPlaying } from './now-playing/now-playing';
import { RoomPage } from './room';
import { SongQueue } from './song-queue/song-queue';
import { SongSearch } from './song-search/song-search';

@NgModule({
  declarations: [
    RoomPage,
    SongSearch,
    DeviceSelect,
    SongQueue,
    NowPlaying
  ],
  imports: [
    IonicPageModule.forChild(RoomPage)
  ]
})
export class RoomPageModule { }
