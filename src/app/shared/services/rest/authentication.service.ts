import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {AppstateService} from '../appstate.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends RestService {

  constructor(protected http: HttpClient, protected appState: AppstateService) {
    super(http, appState);
  }

  /**
   *  Création de client
   */
  public createClient(grantType: string, redirectUri: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      // Post qui renvoie un client_id et client_secret
      this.post<{ client_id: string, client_secret: string }>('createClient', {},
        {'redirect-uri': redirectUri, 'grant-type': grantType}).subscribe(result => {
        console.log(result);

        if (result && result.client_id) {
          this.appState.clientId = (result.client_id);
        }
        if (result && result.client_secret) {
          this.appState.clientSecret = (result.client_secret);
        }

        console.log(result);

        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   *  Connexion
   */
  public login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let data = {};
      this.createClient('password', '/api').subscribe(resolve => {
        data = {
          client_id: this.appState.clientId,
          client_secret: this.appState.clientSecret,
          grant_type: 'password',
          username,
          password
        };

        console.log(data);

        this.post<any>('oauth/v2/token', {}, data).subscribe(result => {
          console.log(result);
          if (result && result.access_token) {
            // set token
            this.appState.token = result.access_token;
            /*this.appState.userId = result.user.id;
            this.appState.user = result.user;*/

            observer.next(true);
            observer.complete();
          } else {
            observer.next(false);
            observer.complete();
          }
        }, error => {
          observer.error(error);
          observer.complete();
        });

      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}
