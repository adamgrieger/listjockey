import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SERVER_HOST } from '../../../../app/config';
import { User } from '../models/users.models';

@Injectable()
export class ListJockeyUserService {

  constructor(private http: Http) { }

  public addUser = (user: User) => this.http.post(`${ SERVER_HOST }/user/add`, user);

  public removeUser = (username: string) =>
    this.http.delete(`${ SERVER_HOST }/user/remove/${ username }`)
}
