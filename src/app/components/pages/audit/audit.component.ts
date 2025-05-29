import { Component } from '@angular/core';
import { IframeComponent } from '../../iframe/iframe.component';

@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [IframeComponent],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss'
})
export class AuditComponent {

}
