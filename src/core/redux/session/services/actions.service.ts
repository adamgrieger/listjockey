import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { AppState } from '../../store/models';
import * as creators from './../action-creators';
import { User } from '../../../api/listjockey/models/user.models';

@Injectable()
export class SessionActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  public load = () => this.ngRedux.dispatch(creators.load());

  public spotifyLogin = () => this.ngRedux.dispatch(creators.spotifyLogin());

  public spotifyLogout = () => this.ngRedux.dispatch(creators.spotifyLogout());

  public listjockeyLogin = (user: User) => this.ngRedux.dispatch(creators.listjockeyLogin(user));

  public listjockeyLogout = (user: User) => this.ngRedux.dispatch(creators.listjockeyLogout(user));

  public updateToken = (refreshToken: string) =>
    this.ngRedux.dispatch(creators.updateToken(refreshToken))

  public updateUser = (accessToken: string) =>
    this.ngRedux.dispatch(creators.updateUser(accessToken))
}
