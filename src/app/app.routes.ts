import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  }
];
