import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'authToken';

  login(username: string, password: string): boolean {
    const isAuthenticated = (username === 'admin' && password === 'password');

    if (isAuthenticated) {
      // Set a token in localStorage to simulate login
      localStorage.setItem(this.TOKEN_KEY, 'your-mock-token'); // Replace 'your-mock-token' with any mock token string
    }

    return isAuthenticated;
  }

  logout(): void {
    // Remove the token from localStorage
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
