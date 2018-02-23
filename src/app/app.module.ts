import 'expose-loader?jQuery!jquery';
import '../../node_modules/signalr/jquery.signalR.js';

import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SignalRConfiguration, SignalRModule } from 'ng2-signalr';

import { CoreModule } from '../core/core.module';
import { RoomListPageModule } from '../pages/room-list/room-list.module';
import { RoomPageModule } from '../pages/room/room.module';
import { MyApp } from './app.component';
import { SERVER_HOST } from './config';

const createConfig = () => {
  const c = new SignalRConfiguration();

  c.url = SERVER_HOST;
  c.logging = true;

  return c;
};

@NgModule({
  declarations: [ MyApp ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SignalRModule.forRoot(createConfig),
    CoreModule,
    RoomListPageModule,
    RoomPageModule
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [ MyApp ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
