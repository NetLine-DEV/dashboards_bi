import { Component, Input } from '@angular/core';
import { iMenuItemDrawer } from '../../models/menuItem.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submenus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submenus.component.html',
  styleUrl: './submenus.component.scss'
})
export class SubmenusComponent  {
  @Input() idBtn: string = '';
  @Input() id: string = '';
  @Input() textMenu: string = '';
  @Input() menus: iMenuItemDrawer[] = [];
  @Input() hasPermission: (permission: string) => boolean = () => false;
  @Input() hasAnyPermission: (permissions: string[]) => boolean = () => false;
  @Input() permissions: string[] = [];

  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
