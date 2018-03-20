import { Device } from '../../api/spotify/models/devices.models';
import * as models from './action-models';
import * as types from './action-types';

export const getAvailableDevices = (): models.GetAvailableDevicesAction => ({
  type: types.GET_AVAILABLE_DEVICES
});

export const getAvailableDevicesFailure = (
  error: Error
): models.GetAvailableDevicesFailureAction => ({
  type: types.GET_AVAILABLE_DEVICES_FAILURE,
  payload: error
});

export const getAvailableDevicesSuccess = (
  devices: Device[]
): models.GetAvailableDevicesSuccessAction => ({
  type: types.GET_AVAILABLE_DEVICES_SUCCESS,
  payload: devices
});
