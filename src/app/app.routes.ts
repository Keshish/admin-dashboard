import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component'; // Import the WelcomeComponent

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: WelcomeComponent, // Display WelcomeComponent at the root route
  },
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // Add other child routes under MainLayoutComponent as needed
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect unknown paths to the root
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
