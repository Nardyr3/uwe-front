import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/rest/authentication.service';
import {AppstateService} from '../services/appstate.service';
import {Module} from '../models/module';
import {Student} from '../models/student';
import {ModuleService} from '../services/rest/module.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public appState: AppstateService, public auth: AuthenticationService,
              public router: Router, private moduleService: ModuleService) {
  }

  /**
   * Défini si la page peut être accédée ou non en fonction du statut de l'authentification
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.appState);
    if (this.appState.isAuth()) {
      if (!this.appState.user) {
        return new Observable<boolean>((observer) => {
          this.auth.getCurrentUser().subscribe(resolve => {
            console.log(resolve);
            observer.next(true);
            observer.complete();
          }, error => {
            this.router.navigate(['login']);
            return false;
          });
        });

      } else {
        return true;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  public loadAppData(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.moduleService.getModules().subscribe(resolve => {
        this.appState.modules = resolve as Array<Module>;
        if (this.appState.modules) {
          observer.next(true);
          observer.complete();
        } else {
          observer.next(false);
          observer.complete();
        }
      }, error => {
        observer.next(false);
        observer.complete();
      });
    });
  }

}
