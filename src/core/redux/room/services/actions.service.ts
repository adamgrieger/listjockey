import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { Song } from '../../../api/listjockey/models/songs.models';
import { User } from '../../../api/listjockey/models/users.models';
import { AppState } from '../../store/models';
import * as creators from '../action-creators';

@Injectable()
export class RoomActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  public addUser = (user: User) => this.ngRedux.dispatch(creators.addUser(user));

  public removeUser = (username: User) => this.ngRedux.dispatch(creators.removeUser(username));

  public joinRoom = (id: number, username: string) =>
    this.ngRedux.dispatch(creators.joinRoom(id, username))

  public leaveRoom = (id: number, username: string) =>
    this.ngRedux.dispatch(creators.leaveRoom(id, username))

  public addSong = (song: Song) => this.ngRedux.dispatch(creators.addSong(song));

  public updateQueue = (song: Song) => this.ngRedux.dispatch(creators.updateQueue(song));

  public nextSong = () => this.ngRedux.dispatch(creators.nextSong());
}
