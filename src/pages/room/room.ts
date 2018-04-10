import 'rxjs/add/operator/concat';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NgRedux } from 'ng2-redux';
import { BroadcastEventListener, SignalR, SignalRConnection } from 'ng2-signalr';
import { Observable } from 'rxjs/Observable';

import { Room } from '../../core/api/listjockey/models/rooms.models';
import { Song } from '../../core/api/listjockey/models/songs.models';
import { SpotifyPlaybackService } from '../../core/api/spotify/services/playback.service';
import { RoomActions } from '../../core/redux/room/services/actions.service';
import { AppState } from '../../core/redux/store/models';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage implements OnInit, OnDestroy {

  private connection: SignalRConnection;
  private onPlaySong$: BroadcastEventListener<Song>;
  private onSongAdded$: BroadcastEventListener<Song>;
  private room$: Observable<Room>;

  constructor(
    private navParams: NavParams,
    private ngRedux: NgRedux<AppState>,
    private signalr: SignalR,
    private room: RoomActions,
    private playback: SpotifyPlaybackService
  ) { }

  ngOnInit() {
    this.connection = this.signalr.createConnection({ hubName: 'RoomHub' });
    this.room$ = this.ngRedux.select(state => state.room.current);

    const roomId: number = this.navParams.get('id');
    const username = this.ngRedux.getState().session.user.id;

    this.room.getRoom(roomId);
    this.room.joinRoom(roomId, username);

    this.onPlaySong$ = this.connection.listenFor<Song>('play_song');
    this.onPlaySong$.subscribe(song => {
      if (song) {
        this.playback.play(song.track_id)
          .concat(this.playback.seek(song.offset * 1000))
          .subscribe();
      }
    });

    this.onSongAdded$ = this.connection.listenFor<Song>('song_added');
    this.onSongAdded$.subscribe(song => {
      if (song) {
        this.room.updateQueue(song);
      }
    });

    this.connection.start().then(conn => {
      conn.invoke('JoinRoom', `${ roomId }`);
    });
  }

  ngOnDestroy() {
    const roomId: number = this.navParams.get('id');
    const username = this.ngRedux.getState().session.user.id;

    this.room.leaveRoom(roomId, username);
    this.onPlaySong$.unsubscribe();
    this.connection.invoke('LeaveRoom', `${ roomId }`)
      .then(() => this.connection.stop());
  }
}
