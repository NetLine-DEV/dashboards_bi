import { Component, inject } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(LoginService);

  login() {
    this.authService.login();
  }
}
