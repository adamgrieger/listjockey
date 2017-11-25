import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SpotifyAuthorizationService {

  constructor(private http: Http, private storage: Storage) { }

  public requestAuthorization(): void {
    const width = 450, height = 730;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    const messageHandler: EventListener = (event: MessageEvent) => {
      try {
        console.log(event);
      } catch (err) {
        console.error(err);
      }
    };

    window.addEventListener('message', messageHandler, false);

    this.getLoginUrl().subscribe((res: Response) => {
      const windowFeatures = `menubar=no,location=no,resizable=no,scrollbars=no,status=no,
                              width=${ width },height=${ height },top=${ top },left=${ left }`;

      window.open(res.text(), 'Spotify', windowFeatures);
    });
  }

  // public requestAuthorization(): void {
  //   const width = 450, height = 730;
  //   const left: number = window.screen.width / 2 - width / 2;
  //   const top: number = window.screen.height / 2 - height / 2;

  //   const messageHandler: EventListener = (event: MessageEvent) => {
  //     try {
  //       const hash: any = JSON.parse(event.data);
  //       console.log(hash);

  //       if (hash.type === 'access_token') {
  //         window.removeEventListener('message', messageHandler, false);

  //         const accessToken: string = hash.access_token;
  //         const expiresIn: number = hash.expires_in;

  //         if (accessToken === '') {
  //           console.log('Login error');
  //         } else {
  //           const refreshToken: string = hash.refresh_token;

  //           console.log('messageHandler');

  //           window.localStorage.setItem('refreshToken', refreshToken);
  //           window.localStorage.setItem('accessToken', accessToken);
  //           window.localStorage.setItem('expiresIn', (Date.now() + expiresIn * 1000).toString());
  //         }
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   window.addEventListener('message', messageHandler, false);

  //   this.getAuthorizationUrl().subscribe((res: Response) => {
  //     const windowFeatures = `menubar=no,location=no,resizable=no,scrollbars=no,status=no,
  //                             width=${ width },height=${ height },top=${ top },left=${ left }`;

  //     window.open(res.text(), 'Spotify', windowFeatures);
  //   });
  // }

  private getLoginUrl(): Observable<Response> {
    return this.http.get('http://192.168.1.165:51077/api/auth/login');
  }
}
