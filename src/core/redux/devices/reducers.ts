import { Reducer } from 'redux';

import { Device } from '../../api/spotify/models/devices.models';
import * as models from './action-models';
import * as types from './action-types';

export interface DevicesState {
  devices: Device[];
  error: Error;
}

export const DEVICES_INITIAL_STATE: DevicesState = {
  devices: null,
  error: null
};

export const devicesReducer: Reducer<DevicesState> = (
  state: DevicesState = DEVICES_INITIAL_STATE,
  action: models.DevicesAction
): DevicesState => {
  switch (action.type) {

    case types.GET_AVAILABLE_DEVICES_FAILURE:
      return { ...state, error: action.payload };

    case types.GET_AVAILABLE_DEVICES_SUCCESS:
      return { ...state, devices: action.payload };

    default:
      return state;
  }
};
