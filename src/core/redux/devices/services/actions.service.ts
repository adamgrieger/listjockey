import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { AppState } from '../../store/models';
import * as creators from '../action-creators';

@Injectable()
export class DevicesActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  public getAvailableDevices = () => this.ngRedux.dispatch(creators.getAvailableDevices());
}
