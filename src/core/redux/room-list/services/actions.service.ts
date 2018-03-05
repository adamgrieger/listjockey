import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { CreateRoom } from '../../../api/listjockey/models/room-list.models';
import { AppState } from '../../store/models';
import * as creators from '../action-creators';

@Injectable()
export class RoomListActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  public getRooms = () => this.ngRedux.dispatch(creators.getRooms());

  public createRoom = (room: CreateRoom) => this.ngRedux.dispatch(creators.createRoom(room));
}
