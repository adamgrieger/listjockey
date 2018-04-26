import 'rxjs/add/operator/concat';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NgRedux } from 'ng2-redux';
import { BroadcastEventListener, SignalR, SignalRConnection } from 'ng2-signalr';
import { Observable } from 'rxjs/Observable';

import { ChatMessage } from '../../core/api/listjockey/models/chat.models';
import { Room } from '../../core/api/listjockey/models/rooms.models';
import { Song } from '../../core/api/listjockey/models/songs.models';
import { SpotifyPlaybackService } from '../../core/api/spotify/services/playback.service';
import { ChatActions } from '../../core/redux/chat/services/actions.service';
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
  private onChatMessageReceived$: BroadcastEventListener<ChatMessage>;
  private room$: Observable<Room>;
  private chatMessages$: Observable<ChatMessage[]>;

  constructor(
    private navParams: NavParams,
    private ngRedux: NgRedux<AppState>,
    private signalr: SignalR,
    private room: RoomActions,
    private chat: ChatActions,
    private playback: SpotifyPlaybackService
  ) { }

  ngOnInit() {
    this.connection = this.signalr.createConnection({ hubName: 'RoomHub' });
    this.room$ = this.ngRedux.select(state => state.room.current);
    this.chatMessages$ = this.ngRedux.select(state => state.chat.messages);

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

    this.onChatMessageReceived$ = this.connection.listenFor<ChatMessage>('chat_message');
    this.onChatMessageReceived$.subscribe(message => {
      console.log(message);
      if (message.text) {
        this.chat.receiveMessage(message);
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
    this.onSongAdded$.unsubscribe();
    this.onChatMessageReceived$.unsubscribe();
    this.connection.invoke('LeaveRoom', `${ roomId }`)
      .then(() => this.connection.stop());
  }

  private sendChatMessage = (content: string) => {
    if (content) {
      const state = this.ngRedux.getState();

      const message: ChatMessage = {
        sender: state.session.user.id,
        text: content
      };

      this.connection.invoke(
        'ChatMessage',
        String(state.room.current.id),
        state.session.user.id,
        content
      );
    }
  }
}
