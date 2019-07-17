import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Module} from '../models/module';
import {Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  protected _token: BehaviorSubject<string> = new BehaviorSubject<string>('');

  protected _clientId: BehaviorSubject<string> = new BehaviorSubject<string>('');

  protected _clientSecret: BehaviorSubject<string> = new BehaviorSubject<string>('');

  /**
   * Liste des modules
   */
  protected _modules: BehaviorSubject<Module[]> = new BehaviorSubject<Module[]>([]);

  /**
   * User id
   */
  protected _userId: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  /**
   * User connecté
   */
  protected _user: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);

  private readonly LS_USER_ID: string = 'user_id';

  /**
   * Clé localstorage token
   */
  private readonly LS_TOKEN: string = 'token';
  /**
   * Clé localstorage token
   */
  private readonly LS_REFRESH_TOKEN: string = 'refresh_token';
  /**
   * Clé localstorage Client Id
   */
  private readonly LS_CLIENT_ID: string = 'client_id';
  /**
   * Clé localstorage Client Secret
   */
  private readonly LS_CLIENT_SECRET: string = 'client_secret';

  constructor() {
    const token: string = localStorage.getItem('token');
    if (token !== null && token !== '') {
      this.token = token;
    }
  }

  public isAuth(): boolean {
    return (this.token !== null && this.token !== '');
  }

  /**
   * Récupération du token courant
   */
  public get token(): string {
    return this._token.getValue();
  }

  /**
   * Affectation du token courant
   */
  public set token(value: string) {
    if (!value) {
      localStorage.removeItem(this.LS_TOKEN);
    } else {
      localStorage.setItem(this.LS_TOKEN, value);
    }
    this._token.next(value);
  }

  /**
   * Récupération du token courant
   */
  public get clientId(): string {
    return this._clientId.getValue();
  }

  /**
   * Affectation du token courant
   */
  public set clientId(value: string) {
    if (!value) {
      localStorage.removeItem(this.LS_CLIENT_ID);
    } else {
      localStorage.setItem(this.LS_CLIENT_ID, value);
    }
    this._clientId.next(value);
  }

  /**
   * Récupération du token courant
   */
  public get clientSecret(): string {
    return this._clientSecret.getValue();
  }

  /**
   * Affectation du token courant
   */
  public set clientSecret(value: string) {
    if (!value) {
      localStorage.removeItem(this.LS_CLIENT_SECRET);
    } else {
      localStorage.setItem(this.LS_CLIENT_SECRET, value);
    }
    this._clientSecret.next(value);
  }

  /**
   * Récupération du token courant
   */
  public get userId(): number {
    return this._userId.getValue();
  }

  /**
   * Affectation du token courant
   */
  public set userId(value: number) {
    if (!value) {
      localStorage.removeItem(this.LS_USER_ID);
    } else {
      localStorage.setItem(this.LS_USER_ID, value.toString());
    }
    this._userId.next(value);
  }

  /**
   * Récupération du token courant
   */
  public get user(): Student {
    return this._user.getValue();
  }

  /**
   * Affectation du token courant
   */
  public set user(value: Student) {
    this._user.next(value);
  }


}
