import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { User } from '../../../api/listjockey/models/user.models';
import { AppState } from '../../store/models';
import * as creators from './../action-creators';

@Injectable()
export class SessionActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  public load = () => this.ngRedux.dispatch(creators.load());

  public login = () => this.ngRedux.dispatch(creators.spotifyLogin());

  public logout = () => this.ngRedux.dispatch(creators.listjockeyLogout());
}
