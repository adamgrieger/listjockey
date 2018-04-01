import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { AppState } from '../../store/models';
import * as creators from '../action-creators';

@Injectable()
export class SearchActions {

  constructor(private ngRedux: NgRedux<AppState>) { }

  public searchTracks = (query: string) => this.ngRedux.dispatch(creators.searchTracks(query));
}
