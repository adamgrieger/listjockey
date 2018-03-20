import { Device } from '../../api/spotify/models/devices.models';
import * as types from './action-types';

export type DevicesAction =
  | GetAvailableDevicesAction
  | GetAvailableDevicesFailureAction
  | GetAvailableDevicesSuccessAction
  ;

export interface GetAvailableDevicesAction {
  type: typeof types.GET_AVAILABLE_DEVICES;
}

export interface GetAvailableDevicesFailureAction {
  type: typeof types.GET_AVAILABLE_DEVICES_FAILURE;
  payload: Error;
}

export interface GetAvailableDevicesSuccessAction {
  type: typeof types.GET_AVAILABLE_DEVICES_SUCCESS;
  payload: Device[];
}
