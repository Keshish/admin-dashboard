import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Mock login logic
    this.isAuthenticated = (username === 'admin' && password === 'password');
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
