import 'rxjs/add/operator/debounceTime';

import { Injectable } from '@angular/core';
import { Store } from 'redux';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { SpotifySearchService } from '../../../api/spotify/services/search.service';
import * as creators from '../action-creators';
import * as models from '../action-models';
import * as types from '../action-types';
import { SearchState } from '../reducers';

@Injectable()
export class SearchEpics {

  constructor(private search: SpotifySearchService) { }

  public getCombinedEpics = () =>
    combineEpics(
      this.searchTracks
    )

  public searchTracks = (
    action$: ActionsObservable<models.SearchAction>,
    store: Store<SearchState>
  ) =>
    action$.ofType(types.SEARCH_TRACKS)
      .switchMap((action: models.SearchTracksAction) =>
        this.search.searchTracks(action.payload)
          .debounceTime(500)
          .map(tracks => creators.searchTracksSuccess(tracks))
          .catch(err => Observable.of(creators.searchTracksFailure(err)))
      )
}
