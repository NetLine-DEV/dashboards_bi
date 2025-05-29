import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string = '';

  sideMenu = new EventEmitter<boolean>();
  errorLogin = new EventEmitter<boolean>();
  router = inject(Router);
  http = inject(HttpClient);
  toast = inject(ToastrService);

  login(userLogin: FormBuilder) {
    try {
      return this.http.post<FormBuilder>('https://leadsintegration.netlinetelecom.com.br:60061/api/proxy-login/', userLogin).subscribe(
        (res) => {
          const stringToken = JSON.stringify(res);
          const removeTenInitial = stringToken.substring(10);
          const removeTwoFinal = removeTenInitial.substring(0, removeTenInitial.length - 2);
          this.token = removeTwoFinal;
          window.localStorage.setItem("token", this.token);
          this.router.navigate(['/']);
          this.toast.success('Login realizado com sucesso!');
        },
        (err) => {
          this.toast.error('Falha no login!');
          return this.errorLogin.emit(true);
        }
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  logout() {
    this.token = '';
    this.sideMenu.emit(false);
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLogged() {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    this.sideMenu.emit(true);
    return true;
  }

  getToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  decodedToken() {
    const token = window.localStorage.getItem('token');
    if (!token) return null;

    try {
      const decoded = jwtDecode<any>(token);
      return decoded;
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return null;
    }
  }
}
