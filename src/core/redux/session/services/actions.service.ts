import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { AppState } from '../../store/models';
import * as creators from './../action-creators';

@Injectable()
export class SessionActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  load() {
    this.ngRedux.dispatch(creators.load());
  }

  login() {
    this.ngRedux.dispatch(creators.login());
  }

  updateToken(refreshToken: string) {
    this.ngRedux.dispatch(creators.updateToken(refreshToken));
  }

  updateUser(accessToken: string) {
    this.ngRedux.dispatch(creators.updateUser(accessToken));
  }
}
