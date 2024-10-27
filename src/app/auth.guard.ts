import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = !!localStorage.getItem('userToken'); // Check if the user is authenticated

    // If user is authenticated and trying to access the login page, redirect to dashboard
    if (isAuthenticated && state.url === '/login') {
      this.router.navigate(['/dashboard']);
      return false;
    }

    // If user is not authenticated and trying to access a protected route, redirect to log in
    if (!isAuthenticated && state.url !== '/login') {
      this.router.navigate(['/login']);
      return false;
    }

    // Allow access to the route if above conditions are not met
    return true;
  }
}
