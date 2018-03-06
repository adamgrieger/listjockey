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
  expect(creators.spotifyLogin()).toEqual({
    type: types.SPOTIFY_LOGIN
  });
});

test('creates a login failure action', () => {
  const err = new Error(data.error);

  expect(creators.spotifyLoginFailure(err)).toEqual({
    type: types.SPOTIFY_LOGIN_FAILURE,
    payload: err
  });
});

test('creates a login success action', () => {
  expect(creators.spotifyLoginSuccess(data.tokens)).toEqual({
    type: types.SPOTIFY_LOGIN_SUCCESS,
    payload: data.tokens
  });
});
