import {Component, EventEmitter, Output} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth-service/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(protected authService:AuthService, private router: Router) {
  }
  @Output() toggle = new EventEmitter<void>();


    logout() {
      // Clear session data if needed
      localStorage.removeItem('authToken');

      // Redirect to login page
      this.router.navigate(['/login']);
  }
}
