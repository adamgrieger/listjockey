import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Store } from 'redux';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { ListJockeyRoomService } from '../../../api/listjockey/services/room.service';
import { getRoomFailure, getRoomSuccess } from '../action-creators';
import { GET_ROOM } from '../action-types';
import { GetRoomAction, RoomAction } from '../models';
import { RoomState } from '../reducers';

@Injectable()
export class RoomEpics {

  constructor(private room: ListJockeyRoomService) { }

  public getCombinedEpics = () => combineEpics(this.getRoom);

  public getRoom = (action$: ActionsObservable<RoomAction>, store: Store<RoomState>) =>
    action$.ofType(GET_ROOM)
      .switchMap((action: GetRoomAction) =>
        this.room.getRoom(action.id)
          .map(room => getRoomSuccess(room))
          .catch(err => Observable.of(getRoomFailure(err)))
      )
}
