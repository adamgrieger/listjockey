import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { ChatMessage } from '../../../api/listjockey/models/chat.models';
import { AppState } from '../../store/models';
import * as creators from '../action-creators';

@Injectable()
export class ChatActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  public sendMessage = (roomID: string, message: ChatMessage) =>
    this.ngRedux.dispatch(creators.sendMessage(roomID, message))

  public receiveMessage = (message: ChatMessage) =>
    this.ngRedux.dispatch(creators.receiveMessage(message))
}
