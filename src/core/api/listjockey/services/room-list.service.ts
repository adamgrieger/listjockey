import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SERVER_HOST } from '../../../../app/config';
import { CreateRoom, RoomListing } from '../models/rooms.models';

@Injectable()
export class ListJockeyRoomListService {

  constructor(private http: Http) { }

  public getRooms = () =>
    this.http.get(`${ SERVER_HOST }/room`)
      .map(res => <RoomListing[]>(res.json()))

  public createRoom = (room: CreateRoom) =>
    this.http.post(`${ SERVER_HOST }/room`, room)
      .map(res => <RoomListing>(res.json()))

  public deleteRoom = (id: number) => this.http.delete(`${ SERVER_HOST }/room/delete/${ id }`);
}
