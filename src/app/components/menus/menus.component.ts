import { Component, Input } from '@angular/core';
import { iMenuItemDrawer } from '../../models/menuItem.model';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.scss'
})
export class MenusComponent {
  @Input() id: string = '';
  @Input() menus: iMenuItemDrawer[] = [];
  @Input() hasPermission: (permission: string) => boolean = () => false;
}
