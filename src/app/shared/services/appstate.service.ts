import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  protected _token: BehaviorSubject<string> = new BehaviorSubject<string>('');

  protected _clientId: BehaviorSubject<string> = new BehaviorSubject<string>('');

  protected _clientSecret: BehaviorSubject<string> = new BehaviorSubject<string>('');

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

  constructor() { }

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
    return this._clientId.getValue();
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


}
