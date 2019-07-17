import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {AppstateService} from '../appstate.service';
import {Observable} from 'rxjs';
import {Student} from '../../models/student';
import {Module} from '../../models/module';

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

  /**
   * Récupération d'un student par son id
   */
  public getStudentById(studentId: number): Observable<Student> {
    return new Observable<Student>(observer => {
      this.get<any>('api/students/' + studentId, {}).subscribe(result => {
        observer.next(result as Student);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   * Create module
   */
  public createStudent(student: Student): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.post<any>('api/auth/register', {}, student).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   * Create module
   */
  public deleteStudent(studentId: number): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.del<any>('api/students/' + studentId, {}).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}
