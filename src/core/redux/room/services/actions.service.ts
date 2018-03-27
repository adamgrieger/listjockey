import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { AppState } from '../../store/models';
import * as creators from '../action-creators';

@Injectable()
export class RoomActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  public getRoom = (id: number) => this.ngRedux.dispatch(creators.getRoom(id));

  public getUsers = (id: number) => this.ngRedux.dispatch(creators.getUsers(id));

  public joinRoom = (id: number, username: string) =>
    this.ngRedux.dispatch(creators.joinRoom(id, username))

  public leaveRoom = (id: number, username: string) =>
    this.ngRedux.dispatch(creators.leaveRoom(id, username))
}
