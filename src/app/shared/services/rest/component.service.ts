import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {AppstateService} from '../appstate.service';
import {Observable} from 'rxjs';
import {Exam} from '../../models/component';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ComponentService extends RestService {

  constructor(protected http: HttpClient, protected appState: AppstateService) {
    super(http, appState);
  }

  /**
   * Get all components
   */
  public getComponents(): Observable<Exam[]> {
    return new Observable<Exam[]>(observer => {
      this.get<any>('api/components', {}).subscribe(result => {
        observer.next(result as Array<Exam>);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   * Get component by id
   */
  public getComponentById(componentId: number): Observable<Exam> {
    return new Observable<Exam>(observer => {
      this.get<any>('api/components/' + componentId, {}).subscribe(result => {
        observer.next(result as Exam);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   * Create components
   */
  public createComponent(component: any): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.post<any>('api/components', {}, component).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   * Delete component
   */
  public deleteComponent(componentId: number): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.del<any>('api/components/' + componentId, {}).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   * Edit component
   */
  public editComponent(component: Exam): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.put<any>('api/components/' + component.id, {}, component).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}
