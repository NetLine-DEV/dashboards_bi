import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'sidebar-component',
  standalone: true,
  imports: [NgbDropdownModule, NgClass, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent { 
  statusSideBar: boolean = false;
  authService = inject(LoginService);

  toggleSideBar() {
    this.statusSideBar =!this.statusSideBar;
  }

  logout() {
    this.authService.logout();
  }
}
