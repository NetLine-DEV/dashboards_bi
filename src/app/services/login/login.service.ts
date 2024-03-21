import { EventEmitter, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string = '';
  sideMenu = new EventEmitter<boolean>();
  router = inject(Router)

  constructor() { }

  login() {
    this.token = 'logado';
    window.localStorage.setItem('token', this.token);
    this.sideMenu.emit(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.token = '';
    this.sideMenu.emit(false);
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLogged() {
    const token = window.localStorage.getItem('token');

    if (token != 'logado') {
      return false;
    }

    this.sideMenu.emit(true);
    return true;
  }
}
