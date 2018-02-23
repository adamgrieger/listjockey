import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Store } from 'redux';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { ListJockeyRoomListService } from '../../../api/listjockey/services/room-list.service';
import { getRoomsFailure, getRoomsSuccess } from '../action-creators';
import { GET_ROOMS } from '../action-types';
import { GetRoomsAction, RoomListAction } from '../models';
import { RoomListState } from '../reducers';

@Injectable()
export class RoomListEpics {

  constructor(private roomList: ListJockeyRoomListService) { }

  public getCombinedEpics = () => combineEpics(this.getRooms);

  public getRooms = (action$: ActionsObservable<RoomListAction>, store: Store<RoomListState>) =>
    action$.ofType(GET_ROOMS)
      .switchMap((action: GetRoomsAction) =>
        this.roomList.getRooms()
          .map(rooms => getRoomsSuccess(rooms))
          .catch(err => Observable.of(getRoomsFailure(err)))
      )
}
