import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

constructor(private router: Router, private auth: AuthService) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // I can verify if user is logged by service
    if (!this.auth.isUserLoggedIn()){
      this.router.navigate(['login']);
    }else {
      return true;
    }
  }
}
