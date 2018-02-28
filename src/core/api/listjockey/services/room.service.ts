import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SERVER_HOST } from '../../../../app/config';
import { Room } from '../models/room.models';

@Injectable()
export class ListJockeyRoomService {

  constructor(private http: Http) { }

  public getRoom = (id: number) =>
    this.http.get(`${ SERVER_HOST }/room/${ id }`)
      .map(res => <Room>(res.json()))
}
