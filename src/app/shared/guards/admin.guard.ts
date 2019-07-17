import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {AppstateService} from '../services/appstate.service';
import {AuthenticationService} from '../services/rest/authentication.service';
import {ModuleService} from '../services/rest/module.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(public appState: AppstateService, public auth: AuthenticationService,
              public router: Router, private moduleService: ModuleService) {
  }

  /**
   * Défini si la page peut être accédée ou non en fonction du statut de l'authentification
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.appState.isAuth()) {
      if (!this.isReady()) {
        console.log('LOAD DE LA DATA');
        this.loadAppData().subscribe();
        return new Observable<boolean>((observer) => {
          this.auth.getCurrentUser().subscribe(resolve => {
            observer.next(this.appState.user.roles.includes('ROLE_SUPER_ADMIN'));
            observer.complete();
          }, error => {
            this.router.navigate(['login']);
            return false;
          });
        });

      } else {
        return this.appState.user.roles.includes('ROLE_SUPER_ADMIN');
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  public loadAppData(): Observable<boolean> {

    return new Observable<boolean>(observer => {
      const test = forkJoin(
        this.auth.getCurrentUser(),
        this.moduleService.getModules(),
      );
      test.subscribe(val => {
        this.appState.modules = val[1];
        observer.next(true);
        observer.complete();
      });
    });


  }

  public isReady(): boolean {
    return this.appState.modules.length !== 0 && this.appState.token != null && this.appState.token !== '';
  }
}
