import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] }, // Guard applied to login route
  { path: '', component: WelcomeComponent }, // Public welcome page

  // Authenticated routes wrapped with MainLayoutComponent
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard], // Guard applied to authenticated routes
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // Additional authenticated routes
    ],
  },

  // Redirect unknown paths to the welcome page
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
