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

export const searchReducer: Reducer<SearchState> = (
  state: SearchState = SEARCH_INITIAL_STATE,
  action: models.SearchAction
): SearchState => {
  switch (action.type) {

    case types.SEARCH_TRACKS_FAILURE:
      return { ...state, error: action.payload };

    case types.SEARCH_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload };

    default:
      return state;
  }
};
