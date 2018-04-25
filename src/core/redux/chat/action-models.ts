import { ChatMessage } from '../../api/listjockey/models/chat.models';
import * as types from './action-types';

export type ChatAction =
  | SendMessageAction
  | SendMessageFailureAction
  | SendMessageSuccessAction
  | ReceiveMessageAction
  ;

export interface SendMessageAction {
  type: typeof types.SEND_MESSAGE;
  payload: {
    roomID: string;
    message: ChatMessage;
  };
}

export interface SendMessageFailureAction {
  type: typeof types.SEND_MESSAGE_FAILURE;
  payload: Error;
}

export interface SendMessageSuccessAction {
  type: typeof types.SEND_MESSAGE_SUCCESS;
}

export interface ReceiveMessageAction {
  type: typeof types.RECEIVE_MESSAGE;
  payload: ChatMessage;
}
