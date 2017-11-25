import { SpotifyAuthorizationService } from '../../common/services/spotify-authorization';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-room-list',
  templateUrl: 'room-list.html',
})
export class RoomListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
              private spotifyAuth: SpotifyAuthorizationService, private iab: InAppBrowser) { }

  requestAuthorization(): void {
    this.spotifyAuth.requestAuthorization();
  }
}
