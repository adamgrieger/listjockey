import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { SessionActions } from '../../core/redux/session/services/actions.service';
import { AppState } from '../../core/redux/store/models';

@IonicPage()
@Component({
  selector: 'page-room-list',
  templateUrl: 'room-list.html'
})
export class RoomListPage implements OnInit {

  private accessToken$: Observable<string>;
  private expiresOn$: Observable<number>;
  private refreshToken$: Observable<string>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ngRedux: NgRedux<AppState>,
    private session: SessionActions
  ) { }

  ngOnInit() {
    this.accessToken$ = this.ngRedux.select(state => state.session.accessToken);
    this.expiresOn$ = this.ngRedux.select(state => state.session.expiresOn);
    this.refreshToken$ = this.ngRedux.select(state => state.session.refreshToken);
  }

  private login = () => this.session.login();

  private logout = () => this.session.logout();
}
