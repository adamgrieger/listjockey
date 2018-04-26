import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ChatBox } from './chat-box/chat-box';
import { DeviceSelect } from './device-select/device-select';
import { NowPlaying } from './now-playing/now-playing';
import { RoomPage } from './room';
import { RoomDetails } from './room-details/room-details';
import { RoomMembers } from './room-members/room-members';
import { SongQueue } from './song-queue/song-queue';
import { SongSearch } from './song-search/song-search';

@NgModule({
  declarations: [
    RoomPage,
    SongSearch,
    DeviceSelect,
    SongQueue,
    NowPlaying,
    RoomDetails,
    ChatBox,
    RoomMembers
  ],
  imports: [
    IonicPageModule.forChild(RoomPage)
  ]
})
export class RoomPageModule { }
