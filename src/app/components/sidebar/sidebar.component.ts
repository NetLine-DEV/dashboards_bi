import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { ItemDrawerComponent } from "../item-drawer/item-drawer.component";
import { iMenuItemDrawer } from '../../models/menuItem.model';
import { DrawerComponent } from '../drawer/drawer.component';
import { initFlowbite } from 'flowbite';
import { LucideAngularModule, ClipboardCheck, CircleDollarSign, SquareKanban, TvMinimal, SquareArrowOutUpLeft } from 'lucide-angular';

@Component({
  selector: 'sidebar-component',
  standalone: true,
  imports: [NgbDropdownModule, NgClass, NgIf, LucideAngularModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent implements OnInit, AfterViewInit {
  readonly ClipboardCheck = ClipboardCheck;
  readonly CircleDollarSign = CircleDollarSign;
  readonly SquareKanban = SquareKanban;
  readonly TvMinimal = TvMinimal;
  readonly SquareArrowOutUpLeft = SquareArrowOutUpLeft;
  statusSideBar: boolean = true;
  authService = inject(LoginService);
  router = inject(Router);
  data_user = this.authService.decodedToken();
  permissions: string[] = this.data_user.permissoes || [];

  permissoesBonificacao: string [] = ['usuarios.dashboard_produtividade_gratificacao', 'usuarios.dashboard_estrutura', 'usuarios.dashboard_instalacao_suporte'];

  permissoesGestao: string [] = ['usuarios.dashboard_auditoria', 'usuarios.dashboard_cgr', 'usuarios.dashboard_comercial', 'usuarios.dashboard_leads', 'usuarios.dashboard_marketing', 'usuarios.dashboard_contas_receber', 'usuarios.dashboard_contas_pagar', 'usuarios.dashboard_tesouraria', 'usuarios.dashboard_direcao', 'usuarios.dashboard_estrutura', 'usuarios.dashboard_financeiro_service_desk', 'usuarios.dashboard_rh', 'usuarios.dashboard_instalacao_suporte'];


  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  toggleSideBar() {
    if (!this.statusSideBar) {
      const dropdowns = document.querySelectorAll('[aria-expanded="true"]');
      dropdowns.forEach((dropdown) => {
        dropdown.setAttribute('aria-expanded', 'false');
        const dropdownId = dropdown.getAttribute('aria-controls');
        if (dropdownId) {
          const dropdownElement = document.getElementById(dropdownId);
          if (dropdownElement) {
            dropdownElement.classList.add('hidden');
          }
        }
      });
    }

    this.statusSideBar = !this.statusSideBar;
  }

  logout() {
    this.authService.logout();
  }

  isActive(url: string) {
    return this.router.url === url;
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }

  hasAnyPermission(rules: string[]): boolean {
    return rules.some(permission => this.hasPermission(permission));
  }

  checkMenuState(menuButton: HTMLElement): void {
    let isExpanded = menuButton.getAttribute('aria-expanded');

    if (isExpanded === null) {
      isExpanded = 'false';
      menuButton.setAttribute('aria-expanded', isExpanded);
    }

    const expanded = isExpanded === 'false';

    if (!expanded) {
      return;
    } else {
      this.statusSideBar = false;
    }

    menuButton.setAttribute('aria-expanded', (!expanded).toString());
  }
}
