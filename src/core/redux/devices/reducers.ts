import { Reducer } from 'redux';

import { Device } from '../../api/spotify/models/devices.models';
import {
  DevicesAction,
  GetAvailableDevicesFailureAction,
  GetAvailableDevicesSuccessAction,
} from './action-models';
import { GET_AVAILABLE_DEVICES_FAILURE, GET_AVAILABLE_DEVICES_SUCCESS } from './action-types';

export interface DevicesState {
  devices: Device[];
  error: Error;
}

export const DEVICES_INITIAL_STATE: DevicesState = {
  devices: null,
  error: null
};

const getAvailableDevicesFailure = (
  state: DevicesState,
  action: GetAvailableDevicesFailureAction
): DevicesState => ({
  ...state,
  error: action.payload
});

const getAvailableDevicesSuccess = (
  state: DevicesState,
  action: GetAvailableDevicesSuccessAction
): DevicesState => ({
  ...state,
  devices: action.payload
});

export const devicesReducer: Reducer<DevicesState> = (
  state: DevicesState = DEVICES_INITIAL_STATE,
  action: DevicesAction
): DevicesState => {
  switch (action.type) {
    case GET_AVAILABLE_DEVICES_FAILURE: return getAvailableDevicesFailure(state, action);
    case GET_AVAILABLE_DEVICES_SUCCESS: return getAvailableDevicesSuccess(state, action);
    default: return state;
  }
};
