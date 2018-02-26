import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { RoomListing } from '../../core/api/listjockey/models/room-list.models';
import { RoomListActions } from '../../core/redux/room-list/services/actions.service';
import { SessionActions } from '../../core/redux/session/services/actions.service';
import { AppState } from '../../core/redux/store/models';
import { RoomPage } from '../room/room';

@IonicPage()
@Component({
  selector: 'page-room-list',
  templateUrl: 'room-list.html'
})
export class RoomListPage implements OnInit {

  private accessToken$: Observable<string>;
  private expiresOn$: Observable<number>;
  private refreshToken$: Observable<string>;

  private rooms$: Observable<RoomListing[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ngRedux: NgRedux<AppState>,
    private session: SessionActions,
    private roomList: RoomListActions
  ) { }

  ngOnInit() {
    this.accessToken$ = this.ngRedux.select(state => state.session.accessToken);
    this.expiresOn$ = this.ngRedux.select(state => state.session.expiresOn);
    this.refreshToken$ = this.ngRedux.select(state => state.session.refreshToken);

    this.rooms$ = this.ngRedux.select(state => state.roomList.rooms);

    this.roomList.getRooms();
  }

  private login = () => this.session.login();

  private logout = () => this.session.logout();

  private joinRoom = (roomId: number) =>
    this.navCtrl.push(RoomPage, { id: roomId })
}
