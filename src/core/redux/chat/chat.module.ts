import { NgModule } from '@angular/core';

import { ChatActions } from './services/actions.service';
import { ChatEpics } from './services/epics.service';

@NgModule({
  providers: [ ChatActions, ChatEpics ]
})
export class ChatModule { }
