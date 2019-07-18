import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {AppstateService} from '../appstate.service';
import {Observable} from 'rxjs';
import {Mark} from '../../models/mark';

@Injectable({
  providedIn: 'root'
})
export class MarkService extends RestService {

  constructor(protected http: HttpClient, protected appState: AppstateService) {
    super(http, appState);
  }

  /**
   * Récupération des marks
   */
  public getMarks(): Observable<Mark[]> {
    return new Observable<Mark[]>(observer => {
      this.get<any>('api/marks', {}).subscribe(result => {
        console.log(result);
        observer.next(result as Array<Mark>);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   * Récupération d'une Mark par son id
   */
  public getMarkById(markId: number): Observable<Mark> {
    return new Observable<Mark>(observer => {
      this.get<any>('api/marks/' + markId, {}).subscribe(result => {
        console.log(result);
        observer.next(result as Mark);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   * Create Mark
   */
  public createMark(mark: Mark): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.post<any>('api/marks', {}, mark).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   * Delete Mark
   */
  public deleteMark(markId: number): Observable<boolean> {
    console.log('test');
    return new Observable<boolean>(observer => {
      this.del<any>('api/marks/' + markId, {}).subscribe(result => {
        console.log(result);
        observer.next(true);
        observer.complete();
      }, error => {
        console.log(error);
        observer.error(error);
        observer.complete();
      });
    });
  }
}
