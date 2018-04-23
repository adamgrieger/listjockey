import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { Room } from '../../../core/api/listjockey/models/rooms.models';
import { RoomActions } from '../../../core/redux/room/services/actions.service';
import { AppState } from '../../../core/redux/store/models';

@Component({
  selector: 'song-queue',
  templateUrl: 'song-queue.html'
})
export class SongQueue implements OnInit {

  private room$: Observable<Room>;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private room: RoomActions
  ) { }

  ngOnInit() {
    this.room$ = this.ngRedux.select(state => state.room.current);
  }

  private secondsToTimestamp = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${ minutes }:${ seconds }`;
  }
}
