import { Injectable } from '@angular/core';
import { SignalR } from 'ng2-signalr';
import { Store } from 'redux';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store/models';
import * as creators from '../action-creators';
import * as models from '../action-models';
import * as types from '../action-types';

@Injectable()
export class ChatEpics {

  constructor(private signalr: SignalR) { }

  public getCombinedEpics = () =>
    combineEpics(
      this.sendMessage
    )

  public sendMessage = (
    action$: ActionsObservable<models.ChatAction>,
    store: Store<AppState>
  ) =>
    action$.ofType(types.SEND_MESSAGE)
      .switchMap((action: models.SendMessageAction) =>
        Observable.fromPromise(
          this.signalr.connect({ hubName: 'RoomHub' })
            .then(conn =>
              conn.invoke(
                'ChatMessage',
                action.payload.roomID,
                action.payload.message.sender,
                action.payload.message.text
              )
            )
        )
        .mapTo(creators.sendMessageSuccess())
        .catch(err => Observable.of(creators.sendMessageFailure(err)))
      )
}
