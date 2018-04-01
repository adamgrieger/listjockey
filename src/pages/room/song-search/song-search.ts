import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../../../core/redux/store/models';
import { Observable } from 'rxjs/Observable';
import { SearchActions } from '../../../core/redux/search/services/actions.service';

@Component({
  selector: 'song-search',
  templateUrl: 'song-search.html'
})
export class SongSearch implements OnInit {

  private tracks$: Observable<SpotifyApi.TrackObjectFull[]>;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private search: SearchActions
  ) { }

  ngOnInit() {
    this.tracks$ = this.ngRedux.select(state => state.search.tracks);
  }

  private searchTracks = (query: string) => this.search.searchTracks(query);
}
