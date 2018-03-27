import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ListJockeyPlayQueueService {

  constructor(private http: Http) { }
}
