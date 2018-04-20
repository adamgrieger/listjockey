import * as types from './action-types';

export type SearchAction =
  | SearchTracksAction
  | SearchTracksFailureAction
  | SearchTracksSuccessAction
  | ClearSearchAction
  ;

export interface SearchTracksAction {
  type: typeof types.SEARCH_TRACKS;
  payload: string;
}

export interface SearchTracksFailureAction {
  type: typeof types.SEARCH_TRACKS_FAILURE;
  payload: Error;
}

export interface SearchTracksSuccessAction {
  type: typeof types.SEARCH_TRACKS_SUCCESS;
  payload: SpotifyApi.TrackObjectFull[];
}

export interface ClearSearchAction {
  type: typeof types.CLEAR_SEARCH;
}
