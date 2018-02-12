import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SessionActions } from '../../core/redux/session/services/actions.service';

@IonicPage()
@Component({
  selector: 'page-room-list',
  templateUrl: 'room-list.html'
})
export class RoomListPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private session: SessionActions
  ) { }

  private login = () => this.session.login();
}
