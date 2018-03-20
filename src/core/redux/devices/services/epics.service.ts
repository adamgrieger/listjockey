import { Injectable } from '@angular/core';
import { Store } from 'redux';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { SpotifyDevicesService } from '../../../api/spotify/services/devices.service';
import * as creators from '../action-creators';
import { DevicesAction, GetAvailableDevicesAction } from '../action-models';
import { GET_AVAILABLE_DEVICES } from '../action-types';
import { DevicesState } from '../reducers';

@Injectable()
export class DevicesEpics {

  constructor(private spotifyDevices: SpotifyDevicesService) { }

  public getCombinedEpics = () => combineEpics(this.getAvailableDevices);

  public getAvailableDevices = (
    action$: ActionsObservable<DevicesAction>,
    store: Store<DevicesState>
  ) =>
    action$.ofType(GET_AVAILABLE_DEVICES)
      .switchMap((action: GetAvailableDevicesAction) =>
        this.spotifyDevices.getAvailableDevices()
          .map(devices => creators.getAvailableDevicesSuccess(devices))
          .catch(err => Observable.of(creators.getAvailableDevicesFailure(err)))
      )
}
