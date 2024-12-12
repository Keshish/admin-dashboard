import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './auth.guard';
import {CourseComponent} from "./components/course/course.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] }, // Guard applied to login route
  { path: '', component: WelcomeComponent }, // Public welcome page

  // Authenticated routes wrapped with MainLayoutComponent
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard], // Guard applied to MainLayoutComponent
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Guard applied to /dashboard specifically
      { path: 'course', component: CourseComponent, canActivate: [AuthGuard] },
      // Add additional authenticated routes with canActivate if needed
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
