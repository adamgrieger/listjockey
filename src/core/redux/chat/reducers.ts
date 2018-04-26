import { Reducer } from 'redux';

import { ChatMessage } from '../../api/listjockey/models/chat.models';
import * as models from './action-models';
import * as types from './action-types';

export interface ChatState {
  messages: ChatMessage[];
  error: Error;
}

export const CHAT_INITIAL_STATE: ChatState = {
  messages: null,
  error: null
};

export const chatReducer: Reducer<ChatState> = (
  state: ChatState = CHAT_INITIAL_STATE,
  action: models.ChatAction
): ChatState => {
  switch (action.type) {

    case types.SEND_MESSAGE_FAILURE:
      return { ...state, error: action.payload };

    case types.RECEIVE_MESSAGE:
      return {
        ...state,
        messages: state.messages
          ? [ ...state.messages, action.payload ]
          : [ action.payload ]
      };

    default:
      return state;
  }
};
