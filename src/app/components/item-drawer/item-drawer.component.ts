import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-drawer',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './item-drawer.component.html',
  styleUrl: './item-drawer.component.scss'
})
export class ItemDrawerComponent {
  @Input() permissions: string[] = [];
  @Input() permission: string = "";
  @Input() menuRouter: string = "";
  @Input() textMenu: string = "";
  @Input() statusSideBar: boolean = false;
  @Input() icon: string = "";
  @Input() isActive: boolean = false;
}
