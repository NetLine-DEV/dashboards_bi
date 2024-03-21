import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LoginService } from './services/login/login.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, LoginComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  authService = inject(LoginService)
  showSideBar: boolean = false;

  ngOnInit(): void {
    this.authService.sideMenu.subscribe(status => this.showSideBar = status);
  }
}
