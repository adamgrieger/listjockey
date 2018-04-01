import { NgModule } from '@angular/core';

import { SearchActions } from './services/actions.service';
import { SearchEpics } from './services/epics.service';

@NgModule({
  providers: [ SearchActions, SearchEpics ]
})
export class SearchModule { }
