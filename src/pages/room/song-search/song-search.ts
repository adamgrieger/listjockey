import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { RoomActions } from '../../../core/redux/room/services/actions.service';
import { SearchActions } from '../../../core/redux/search/services/actions.service';
import { AppState } from '../../../core/redux/store/models';

@Component({
  selector: 'song-search',
  templateUrl: 'song-search.html'
})
export class SongSearch implements OnInit, OnDestroy {

  private tracks$: Observable<SpotifyApi.TrackObjectFull[]>;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private room: RoomActions,
    private search: SearchActions
  ) { }

  ngOnInit() {
    this.tracks$ = this.ngRedux.select(state => state.search.tracks);
  }

  ngOnDestroy() {
    this.search.clearSearch();
  }

  private searchTracks = (query: string) => {
    if (query) {
      this.search.searchTracks(query);
    }
  }

  private addSong = (track: SpotifyApi.TrackObjectFull) =>
    this.room.addSong({
      track_id: track.id,
      added_by: this.ngRedux.getState().session.user.id,
      title: track.name,
      artist: track.artists[0].name,
      album: {
        title: track.album.name,
        cover_art: track.album.images[0].url
      },
      duration: Math.floor(track.duration_ms / 1000),
      offset: 0
    })
}
