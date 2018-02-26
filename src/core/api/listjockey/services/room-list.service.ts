import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SERVER_HOST } from '../../../../app/config';
import { GlobalsService } from '../../../services/globals.service';
import { RoomListing } from '../models/room-list.models';

@Injectable()
export class ListJockeyRoomListService {

  constructor(private globals: GlobalsService, private http: Http) { }

  public getRooms = () =>
    this.http.get(`${ SERVER_HOST }/room`)
      .map(res => <RoomListing[]>(res.json()))
}
