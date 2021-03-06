import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { SERVER_HOST } from '../../../../app/config';
import { Room } from '../models/rooms.models';
import { Song } from '../models/songs.models';
import { User } from '../models/users.models';

@Injectable()
export class ListJockeyRoomService {

  constructor(private http: Http) { }

  public getRoom = (id: number) =>
    this.http.get(`${ SERVER_HOST }/room/${ id }`)
      .map(res => <Room>(res.json()))

  public getUsers = (id: number) =>
    this.http.get(`${ SERVER_HOST }/room/${ id }/users`)
      .map(res => <User[]>(res.json()))

  public joinRoom = (id: number, username: string) =>
    this.http.put(`${ SERVER_HOST }/room/${ id }/users`, JSON.stringify(username), {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

  public leaveRoom = (id: number, username: string) =>
    this.http.delete(`${ SERVER_HOST }/room/${ id }/users/${ username }`)

  public addSong = (song: Song, id: number) =>
    this.http.put(`${ SERVER_HOST }/room/${ id }/queue`, song)
}
