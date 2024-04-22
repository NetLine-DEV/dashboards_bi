import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string = '';

  sideMenu = new EventEmitter<boolean>();
  router = inject(Router)
  http = inject(HttpClient);

  login(userLogin: FormBuilder) {
    try {
      return this.http.post<FormBuilder>('/api/login/', userLogin).subscribe(
        (res) => {
          const stringToken = JSON.stringify(res);
          const removeTenInitial = stringToken.substring(10);
          const removeTwoFinal = removeTenInitial.substring(0, removeTenInitial.length - 2);
          this.token = removeTwoFinal;
          window.localStorage.setItem("token", this.token);
          this.router.navigate(['/']);
        },
        (err) => console.error(err)
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
    const decoded = jwtDecode(window.localStorage.getItem('token')!);
    const tokenJSON = JSON.stringify(decoded);
    const tokenObject = JSON.parse(tokenJSON);

    return tokenObject.permissoes;
  }
}
