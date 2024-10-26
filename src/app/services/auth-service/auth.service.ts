import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'authToken'; // Key to store the token in localStorage

  login(username: string, password: string): boolean {
    // Mock login logic
    const isAuthenticated = username === 'admin' && password === 'password';
    if (isAuthenticated) {
      const mockToken = 'mock-jwt-token'; // This simulates a JWT token
      localStorage.setItem(this.tokenKey, mockToken); // Store token in localStorage
    }
    return isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Remove the token from localStorage
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey); // Check if token exists
  }
}
