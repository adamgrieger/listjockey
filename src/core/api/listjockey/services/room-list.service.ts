import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { GlobalsService } from '../../../services/globals.service';
import { SimplifiedRoom } from '../models/room-list.models';

@Injectable()
export class ListJockeyRoomListService {

  constructor(private globals: GlobalsService, private http: Http) { }

  public getRooms = () =>
    this.http.get('../../../../test/example-rooms.json')
      .map(res => <SimplifiedRoom[]>(res.json()))
}
