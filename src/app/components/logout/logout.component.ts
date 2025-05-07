import { Component, inject, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { SquareArrowOutUpLeft} from 'lucide-angular';
import { LoginService } from '../../services/login/login.service';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  private authService = inject(LoginService);
  @Input() status: boolean = false;
  @Input() icon = SquareArrowOutUpLeft;

  logout() {
    this.authService.logout();
  }
}
