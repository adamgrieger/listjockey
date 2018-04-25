import { ChatMessage } from '../../api/listjockey/models/chat.models';
import * as models from './action-models';
import * as types from './action-types';

export const sendMessage = (roomID: string, message: ChatMessage): models.SendMessageAction => ({
  type: types.SEND_MESSAGE,
  payload: {
    roomID,
    message
  }
});

export const sendMessageFailure = (error: Error): models.SendMessageFailureAction => ({
  type: types.SEND_MESSAGE_FAILURE,
  payload: error
});

export const sendMessageSuccess = (): models.SendMessageSuccessAction => ({
  type: types.SEND_MESSAGE_SUCCESS
});

export const receiveMessage = (message: ChatMessage): models.ReceiveMessageAction => ({
  type: types.RECEIVE_MESSAGE,
  payload: message
});
