import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sidebar-component',
  standalone: true,
  imports: [NgOptimizedImage, NgbDropdownModule, NgClass, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent { 
  statusSideBar: boolean = false;

  toggleSideBar() {
    console.log(this.statusSideBar)
    this.statusSideBar =!this.statusSideBar;
  }
}
