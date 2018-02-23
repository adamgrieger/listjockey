import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { AppState } from '../../store/models';
import * as creators from '../action-creators';

@Injectable()
export class RoomListActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  public getRooms = () => this.ngRedux.dispatch(creators.getRooms());
}
