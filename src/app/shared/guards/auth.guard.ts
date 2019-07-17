import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/rest/authentication.service';
import {AppstateService} from '../services/appstate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public appState: AppstateService, public auth: AuthenticationService,
              public router: Router) {
  }

  /**
   * Défini si la page peut être accédée ou non en fonction du statut de l'authentification
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.appState);
    if (this.appState.isAuth()) {

      // Charge les données utilisateurs si elles ne sont pas présentes
      /*if (!this.security.isReady()) {
        console.log('NOT READY');
        return Promise.all([this.auth.getUserInfos().toPromise(), this.loadAppData()]).then(
          resolve => {
            if (resolve.length === 2 && resolve[1]) {
              this.appState.user = resolve[0] as User;
              return true;
            }
            console.log('RESOLVE PAS OK');
            this.router.navigate([AppRoutes.ERROR]);
            this.appState.token = null;
            return false;
          }, () => {
            console.log('REJECTED');
            this.router.navigate([AppRoutes.ERROR]);
            this.appState.token = null;
            return false;
          }
        );
      }*/

      return true;
    } else {
      this.router.navigate(['login']);

      return false;
    }
  }

}
