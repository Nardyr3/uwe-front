import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {AppstateService} from './appstate.service';
import {Observable} from 'rxjs';
import {Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends RestService {

  constructor(protected http: HttpClient, protected appState: AppstateService) {
    super(http, appState);
  }


  /**
   * Récupération des évenements
   */
  public getStudents(): Observable<Student[]> {
    return new Observable<Student[]>(observer => {
      this.get<any>('api/students', {}).subscribe(result => {


        observer.next(result as Array<Student>);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}
