import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { iMenuItemDrawer } from '../../models/menuItem.model';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
  // @Input() permissions: string[] = [];
  // @Input() permission: string = "";
  @Input() icon: string = "";
  @Input() text: string = "";
  @Input() items: iMenuItemDrawer[] = [];
  @Input() isActive: boolean = false;
  @Input() statusSideBar: boolean = false;
}
