import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-iframe',
  standalone: true,
  imports: [],
  templateUrl: './iframe.component.html',
  styleUrl: './iframe.component.scss'
})
export class IframeComponent {
  @Input({ required: true }) title: string = "";
  @Input({ required: true }) src: string = "";
}
