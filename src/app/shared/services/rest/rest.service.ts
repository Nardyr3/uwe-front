import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {AppstateService} from '../appstate.service';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  protected webservicesUrl = '';

  protected constructor(protected http: HttpClient, protected appState: AppstateService) {
    this.webservicesUrl = environment.wsUrl;
  }

  /**
   * Add token to header
   */
  protected get headers(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(this.appState.token);
    if (this.appState.token) {
      headers = headers.set('Authorization', 'Bearer ' + this.appState.token);
    }

    return headers;
  }


  /**
   * Appel GET
   */
  protected get<T>(path: string, params: any): Observable<T> {
    return this.http.get<T>((path.indexOf('data') === 0 ? '' : this.webservicesUrl) + path, {
      headers: this.headers,
      responseType: 'json',
      withCredentials: true,
      observe: 'response'
    }).pipe(
      tap((res) => console.log('HTTP GET - ' + path)),
      map((response: HttpResponse<T>) => (response.body)),
      catchError(this.handleError(path)),
    );
  }

  /**
   * Appel POST
   */
  protected post<T>(path: string, params: any, data: object): Observable<T> {

    const httpParams: HttpParams = new HttpParams({fromObject: params});
    let urlParams = httpParams.toString();
    if (urlParams) {
      urlParams = urlParams.replace(/%5B%5D/g, '[]');
    }
    return this.http.post<T>(this.webservicesUrl + this.mapParameters(path, params) + '?' + urlParams, data, {
        headers: this.headers,
        responseType: 'json',
        withCredentials: true,
        observe: 'response'
      }
    ).pipe(
      tap((res) => console.log('HTTP POST - ' + path)),
      map((response: HttpResponse<T>) => (response.body)),
      catchError(this.handleError(path)),
    );
  }

  /**
   * Appel PUT
   */
  protected put<T>(path: string, params: any, data: object): Observable<T> {

    const httpParams: HttpParams = new HttpParams({fromObject: params});
    let urlParams = httpParams.toString();
    if (urlParams) {
      urlParams = urlParams.replace(/%5B%5D/g, '[]');
    }
    return this.http.put<T>(this.webservicesUrl + this.mapParameters(path, params) + '?' + urlParams, data, {
        headers: this.headers,
        responseType: 'json',
        withCredentials: true,
        observe: 'response'
      }
    ).pipe(
      tap((res) => console.log('HTTP POST - ' + path)),
      map((response: HttpResponse<T>) => (response.body)),
      catchError(this.handleError(path)),
    );
  }

  /**
   * Appel DELETE
   */
  protected del<T>(path: string, params: any): Observable<T> {
    console.log("testt");
    console.log((path.indexOf('data') === 0 ? '' : this.webservicesUrl) + path);
    return this.http.delete<T>((path.indexOf('data') === 0 ? '' : this.webservicesUrl) + path, {
      headers: this.headers,
      responseType: 'json',
      withCredentials: true,
      observe: 'response'
    }).pipe(
      tap((res) => console.log('HTTP DEL - ' + path)),
      map((response: HttpResponse<T>) => (response.body)),
      catchError(this.handleError(path)),
    );
  }

  /**
   * Gestion basique des erreurs
   */
  protected handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      const obs: Observable<T> = new Observable<T>(observer => {
        observer.error(error);
        console.log(error);
        observer.next(error);
      });
      // Let the app keep running by returning an empty or null result (to be defined by method call).
      return obs;
    };
  }

  /**
   * Map params
   */
  protected mapParameters(path: string, params?: object): string {
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          path = path.replace(':' + key, params[key]);
        }
      }
    }
    return path;
  }
}
