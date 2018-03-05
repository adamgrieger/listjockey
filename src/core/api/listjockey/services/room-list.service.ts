import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SERVER_HOST } from '../../../../app/config';
import { RoomListing, CreateRoom } from '../models/room-list.models';

@Injectable()
export class ListJockeyRoomListService {

  constructor(private http: Http) { }

  public getRooms = () =>
    this.http.get(`${ SERVER_HOST }/room`)
      .map(res => <RoomListing[]>(res.json()))

  public createRoom = (room: CreateRoom) =>
    this.http.post(`${ SERVER_HOST }/room`, room)
      .map(res => <RoomListing>(res.json()))
}
