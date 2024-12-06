import { Injectable } from '@angular/core';
import {AutenticationService, LoginDto} from "../../../@api/STA";
import {LoginResponseDto} from "./response-model/responseModelDto";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly TOKEN_KEY = 'authToken';

  constructor(private autenticationService: AutenticationService) {
  }

  login(loginData: LoginDto): Observable<LoginResponseDto> {
    // Assuming `apiAutenticationLoginPost` returns an Observable that emits a LoginResponseDto
    return this.autenticationService.apiAutenticationLoginPost(loginData);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
