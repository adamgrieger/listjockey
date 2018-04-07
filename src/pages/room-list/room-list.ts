import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { CreateRoom, RoomListing } from '../../core/api/listjockey/models/rooms.models';
import { DevicesActions } from '../../core/redux/devices/services/actions.service';
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
  private rooms$: Observable<RoomListing[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ngRedux: NgRedux<AppState>,
    private session: SessionActions,
    private roomList: RoomListActions,
    private devices: DevicesActions
  ) { }

  ngOnInit() {
    this.accessToken$ = this.ngRedux.select(state => state.session.tokens.accessToken);
    this.rooms$ = this.ngRedux.select(state => state.roomList.rooms);

    this.roomList.getRooms();
  }

  private login = () => this.session.login();

  private logout = () => this.session.logout();

  private joinRoom = (roomId: number) => this.navCtrl.push(RoomPage, { id: roomId });

  private createRoom = (room: CreateRoom) => this.roomList.createRoom(room);

  private getAvailableDevices = () => this.devices.getAvailableDevices();
}
