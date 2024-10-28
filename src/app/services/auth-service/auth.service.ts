import { Injectable } from '@angular/core';
import {AutenticationService, LoginDto} from "../../../@api/STA";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'authToken';

  constructor(private autenticationService: AutenticationService ) {
  }
  login(username: string, password: string): boolean {
    const isAuthenticated = (username === 'admin' && password === 'password');
    this.login_smoke();


    if (isAuthenticated) {
      // Set a token in localStorage to simulate login
      localStorage.setItem(this.TOKEN_KEY, 'your-mock-token'); // Replace 'your-mock-token' with any mock token string
    }

    return isAuthenticated;
  }


  login_smoke() {
    const loginData: LoginDto = {
      userName: 'string',
      password: 'Password1!',
    };

    this.autenticationService.apiAutenticationLoginPost(loginData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // Handle successful login response (e.g., store token)
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }

  logout(): void {
    // Remove the token from localStorage
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
