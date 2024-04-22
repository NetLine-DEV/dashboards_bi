import { Component, inject } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(LoginService);
  formBuilderService = inject(NonNullableFormBuilder);
  errorLogin = false;

  form: FormGroup = this.formBuilderService.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]]
  })

  login() {
    this.authService.login(this.form.value);

    this.authService.errorLogin.subscribe((isError) => {
      if (isError) {
        this.errorLogin = true;
      } else {
        this.errorLogin = false;
      }
    })
  }
}
