import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const token = localStorage.getItem('token'); // Check for authentication token

    if (token) {
      // If the user is authenticated and trying to access the login page, redirect to dashboard
      if (state.url === '') {
        return this.router.createUrlTree(['/']);
      }
      // Allow access if authenticated for other pages
      return true;
    } else {
      // If not authenticated, restrict access to protected routes like "Packages"
      // Allow public routes such as "login" without redirection
      if (state.url === '') {
        return true; // Allow access to login
      }

      // If not authenticated and trying to access protected routes, redirect to login
      return this.router.createUrlTree(['']);
    }
  }
}
