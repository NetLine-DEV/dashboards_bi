import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LoginService } from './services/login/login.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, LoginComponent, NgIf, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  authService = inject(LoginService)
  showSideBar: boolean = false;

  ngOnInit(): void {
    initFlowbite();
    this.authService.sideMenu.subscribe(status => this.showSideBar = status);

    interval(1800000).subscribe(() => location.reload());
  }
}
