import { Component } from '@angular/core';
import { LoginService } from '../../services/login-service/login.service';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MatCard} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {LoginDto} from "../../../@api/STA";
import {LoginResponseDto} from "../../services/login-service/response-model/responseModelDto";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = 'string';
  password: string = 'Password1!';

  constructor(private authService: LoginService, private router: Router) {}

  login() {
    const loginData: LoginDto = {
      userName: this.username,
      password: this.password
    };

    // Now the subscribe callback uses the strongly typed LoginResponseDto
    this.authService.login(loginData).subscribe({
      next: (response: LoginResponseDto) => {
        console.log('Login successful:', response);
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        // Handle error appropriately
      }
    });
  }
}
