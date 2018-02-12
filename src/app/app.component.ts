import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';

import { SessionActions } from '../core/redux/session/services/actions.service';
import { RoomListPage } from '../pages/room-list/room-list';

@Component({
  templateUrl: 'app.component.html'
})
export class MyApp implements OnInit {

  rootPage: any = RoomListPage;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private session: SessionActions
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.session.load();
  }
}
