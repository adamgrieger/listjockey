import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RoomPage } from './room';
import { SongSearch } from './song-search/song-search';

@NgModule({
  declarations: [
    RoomPage,
    SongSearch
  ],
  imports: [
    IonicPageModule.forChild(RoomPage)
  ]
})
export class RoomPageModule { }
