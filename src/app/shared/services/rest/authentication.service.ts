import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {AppstateService} from '../appstate.service';
import {Observable} from 'rxjs';
import {Exam} from '../../models/component';
import {Student} from '../../models/student';
import {Router} from '@angular/router';
import {StudentService} from './student.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends RestService {

  constructor(protected http: HttpClient, protected appState: AppstateService, private router: Router, private studentService: StudentService) {
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

        if (result && result.client_id) {
          this.appState.clientId = (result.client_id);
        }
        if (result && result.client_secret) {
          this.appState.clientSecret = (result.client_secret);
        }

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

        this.post<any>('oauth/v2/token', {}, data).subscribe(result => {
          if (result && result.access_token) {
            // set token
            this.appState.token = result.access_token;
            /*this.appState.userId = result.user.id;
            this.appState.user = result.user;*/
            this.getCurrentUser().subscribe(resolve => {
              observer.next(true);
              observer.complete();
            }, error => {
              observer.error(error);
              observer.complete();
            });
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

  /**
   * Get all components
   */
  public getCurrentUser(): Observable<Student> {
    return new Observable<Student>(observer => {
      this.get<any>('api/auth/user', {}).subscribe(result => {
        this.appState.user = result;
        if (!this.appState.user.roles.includes('ROLE_SUPER_ADMIN')) {
          this.studentService.getStudentById(result.id).subscribe(resolve => {
            this.appState.studentModules = resolve.modules;
          });
        }
        observer.next(result as Student);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  public disconnect(): boolean {
    this.appState.token = '';
    this.router.navigate(['login']);
    return true;
  }
}
