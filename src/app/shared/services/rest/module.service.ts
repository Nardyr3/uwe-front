import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {AppstateService} from '../appstate.service';
import {Observable} from 'rxjs';
import {Module} from '../../models/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends RestService {

  constructor(protected http: HttpClient, protected appState: AppstateService) {
    super(http, appState);
  }

  /**
   * Récupération des modules
   */
  public getModules(): Observable<Module[]> {
    return new Observable<Module[]>(observer => {
      this.get<any>('api/modules', {}).subscribe(result => {
        observer.next(result as Array<Module>);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  /**
   * Récupération d'un module par son id
   */
  public getModuleById(moduleId: number): Observable<Module> {
    return new Observable<Module>(observer => {
      this.get<any>('api/modules/' + moduleId, {}).subscribe(result => {
        observer.next(result as Module);
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
  public createModule(module: Module): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.post<any>('api/modules', {}, module).subscribe(result => {
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
  public deleteModule(moduleId: number): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.del<any>('api/modules/' + moduleId, {}).subscribe(result => {
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
  public editModule(module: Module): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.put<any>('api/modules/' + module.id, {}, module).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  public addStudent(moduleId: number, studentId: number): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.post<any>('api/modules/' + moduleId + '/students/' + studentId, {}, {}).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  public removeStudent(moduleId: number, studentId: number): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.del<any>('api/modules/' + moduleId + '/students/' + studentId, {}).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }


}
