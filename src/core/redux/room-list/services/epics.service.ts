import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Store } from 'redux';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { ListJockeyRoomListService } from '../../../api/listjockey/services/room-list.service';
import { AppState } from '../../store/models';
import {
  createRoomFailure,
  createRoomSuccess,
  getRoomsFailure,
  getRoomsSuccess
} from '../action-creators';
import { CREATE_ROOM, GET_ROOMS } from '../action-types';
import { CreateRoomAction, GetRoomsAction, RoomListAction } from '../action-models';

@Injectable()
export class RoomListEpics {

  constructor(private roomList: ListJockeyRoomListService) { }

  public getCombinedEpics = () => combineEpics(this.getRooms, this.createRoom);

  public getRooms = (action$: ActionsObservable<RoomListAction>, store: Store<AppState>) =>
    action$.ofType(GET_ROOMS)
      .switchMap((action: GetRoomsAction) =>
        this.roomList.getRooms()
          .map(rooms => getRoomsSuccess(rooms))
          .catch(err => Observable.of(getRoomsFailure(err)))
      )

  public createRoom = (action$: ActionsObservable<RoomListAction>, store: Store<AppState>) =>
    action$.ofType(CREATE_ROOM)
      .switchMap((action: CreateRoomAction) => {
        const username = store.getState().session.user.id;

        return this.roomList.createRoom({ ...action.payload, username })
          .map(room => createRoomSuccess(room))
          .catch(err => Observable.of(createRoomFailure(err)));
      }
      )
}
