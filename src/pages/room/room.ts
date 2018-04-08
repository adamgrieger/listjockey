import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { Room } from '../../core/api/listjockey/models/rooms.models';
import { RoomActions } from '../../core/redux/room/services/actions.service';
import { AppState } from '../../core/redux/store/models';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage implements OnInit, OnDestroy {

  private room$: Observable<Room>;

  constructor(
    private navParams: NavParams,
    private ngRedux: NgRedux<AppState>,
    private room: RoomActions
  ) { }

  ngOnInit() {
    this.room$ = this.ngRedux.select(state => state.room.current);

    const roomId: number = this.navParams.get('id');
    const username = this.ngRedux.getState().session.user.id;

    this.room.getRoom(roomId);
    this.room.joinRoom(roomId, username);
  }

  ngOnDestroy() {
    const roomId: number = this.navParams.get('id');
    const username = this.ngRedux.getState().session.user.id;

    this.room.leaveRoom(roomId, username);
  }
}
