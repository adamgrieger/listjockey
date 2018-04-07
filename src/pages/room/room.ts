import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { Room } from '../../core/api/listjockey/models/rooms.models';
import { AppState } from '../../core/redux/store/models';
import { RoomActions } from '../../core/redux/room/services/actions.service';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage implements OnInit {

  private room$: Observable<Room>;
  private error$: Observable<Error>;

  constructor(
    private navParams: NavParams,
    private ngRedux: NgRedux<AppState>,
    private room: RoomActions
  ) { }

  ngOnInit() {
    this.room$ = this.ngRedux.select(state => state.room.current);
    this.error$ = this.ngRedux.select(state => state.room.error);

    this.room.getRoom(this.navParams.get('id'));
  }
}
