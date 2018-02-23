import 'jest';

import * as data from '../../../test/example-data';
import * as creators from './action-creators';
import * as types from './action-types';

test('creates a load action', () => {
  expect(creators.load()).toEqual({
    type: types.LOAD
  });
});

test('creates a login action', () => {
  expect(creators.login()).toEqual({
    type: types.LOGIN
  });
});

test('creates a login failure action', () => {
  const err = new Error(data.error);

  expect(creators.loginFailure(err)).toEqual({
    type: types.LOGIN_FAILURE,
    payload: err
  });
});

test('creates a login success action', () => {
  expect(creators.loginSuccess(data.accessToken, data.expiresOn, data.refreshToken)).toEqual({
    type: types.LOGIN_SUCCESS,
    payload: {
      accessToken: data.accessToken,
      expiresOn: data.expiresOn,
      refreshToken: data.refreshToken
    }
  });
});

test('creates an update token action', () => {
  expect(creators.updateToken(data.refreshToken)).toEqual({
    type: types.UPDATE_TOKEN,
    payload: data.refreshToken
  });
});

test('creates an update token failure action', () => {
  const err = new Error(data.error);

  expect(creators.updateTokenFailure(err)).toEqual({
    type: types.UPDATE_TOKEN_FAILURE,
    payload: err
  });
});

test('creates an update token success action', () => {
  expect(creators.updateTokenSuccess(data.accessToken)).toEqual({
    type: types.UPDATE_TOKEN_SUCCESS,
    payload: data.accessToken
  });
});

test('creates an update user action', () => {
  expect(creators.updateUser(data.accessToken)).toEqual({
    type: types.UPDATE_USER,
    payload: data.accessToken
  });
});

test('creates an update user failure action', () => {
  const err = new Error(data.error);

  expect(creators.updateUserFailure(err)).toEqual({
    type: types.UPDATE_USER_FAILURE,
    payload: err
  });
});

test('creates an update user success action', () => {
  expect(creators.updateUserSuccess(data.userObjectPrivate)).toEqual({
    type: types.UPDATE_USER_SUCCESS,
    payload: data.userObjectPrivate
  });
});
