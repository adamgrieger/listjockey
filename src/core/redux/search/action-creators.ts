import * as models from './action-models';
import * as types from './action-types';

export const searchTracks = (query: string): models.SearchTracksAction => ({
  type: types.SEARCH_TRACKS,
  payload: query
});

export const searchTracksFailure = (error: Error): models.SearchTracksFailureAction => ({
  type: types.SEARCH_TRACKS_FAILURE,
  payload: error
});

export const searchTracksSuccess = (
  response: SpotifyApi.TrackSearchResponse
): models.SearchTracksSuccessAction => ({
  type: types.SEARCH_TRACKS_SUCCESS,
  payload: response.tracks.items
});

export const clearSearch = (): models.ClearSearchAction => ({
  type: types.CLEAR_SEARCH
});
