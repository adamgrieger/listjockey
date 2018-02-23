import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { AppState } from '../../store/models';
import * as creators from './../action-creators';

@Injectable()
export class SessionActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  public load = () => this.ngRedux.dispatch(creators.load());

  public login = () => this.ngRedux.dispatch(creators.login());

  public logout = () => this.ngRedux.dispatch(creators.logout());

  public updateToken = (refreshToken: string) =>
    this.ngRedux.dispatch(creators.updateToken(refreshToken))

  public updateUser = (accessToken: string) =>
    this.ngRedux.dispatch(creators.updateUser(accessToken))
}
