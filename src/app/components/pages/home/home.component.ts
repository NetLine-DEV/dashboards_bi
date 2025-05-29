import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private token: string = "";
  private permissions: string[] = [];

  authService = inject(LoginService);

  ngOnInit(): void {
    this.decodedToken();
  }
  decodedToken() {
    this.token = this.authService.getToken()!;
    const decoded = jwtDecode(this.token);
    const tokenJSON = JSON.stringify(decoded);
    const tokenObject = JSON.parse(tokenJSON);
  }
}
