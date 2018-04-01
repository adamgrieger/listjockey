import { Reducer } from 'redux';

import * as models from './action-models';
import * as types from './action-types';

export interface SearchState {
  tracks: SpotifyApi.TrackObjectFull[];
  error: Error;
}

export const SEARCH_INITIAL_STATE: SearchState = {
  tracks: null,
  error: null
};

const searchTracksFailure = (
  state: SearchState,
  action: models.SearchTracksFailureAction
): SearchState => ({
  ...state,
  error: action.payload
});

const searchTracksSuccess = (
  state: SearchState,
  action: models.SearchTracksSuccessAction
): SearchState => ({
  ...state,
  tracks: action.payload
});

export const searchReducer: Reducer<SearchState> = (
  state: SearchState = SEARCH_INITIAL_STATE,
  action: models.SearchAction
): SearchState => {
  switch (action.type) {
    case types.SEARCH_TRACKS_FAILURE: return searchTracksFailure(state, action);
    case types.SEARCH_TRACKS_SUCCESS: return searchTracksSuccess(state, action);
    default: return state;
  }
};
