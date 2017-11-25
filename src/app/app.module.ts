import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SpotifyAuthorizationService } from '../common/services/spotify-authorization';
import { RoomPageModule } from '../pages/room/room.module';
import { RoomListPage } from '../pages/room-list/room-list';
import { RoomListPageModule } from '../pages/room-list/room-list.module';
import { MyApp } from './app';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    RoomListPageModule,
    RoomPageModule
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    MyApp,
    RoomListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    SpotifyAuthorizationService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
