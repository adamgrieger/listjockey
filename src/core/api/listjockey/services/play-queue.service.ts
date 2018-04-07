import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SERVER_HOST } from '../../../../app/config';
import { Song } from '../models/songs.models';

@Injectable()
export class ListJockeyPlayQueueService {

  constructor(private http: Http) { }

  public addSong = (song: Song, id: number) =>
    this.http.put(`${ SERVER_HOST }/room/${ id }/queue`, song)

  public removeSong = (id: number, userID: number, songID: number) =>
    this.http.delete(`${ SERVER_HOST }/room/${ id }/queue`)

  public vote = (id: number, userID: number, songID: number, upVote: boolean) =>
    this.http.post(`${ SERVER_HOST }/room/${ id }/vote`, id)
}
