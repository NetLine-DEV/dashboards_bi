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

  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  menuItems: iMenuItemDrawer[] = [
    { textMenu: 'Auditoria', routeActive: '/auditoria', permission: 'usuarios.dashboard_auditoria', icon: 'bi bi-bookmark-check-fill' },

    { textMenu: 'Bonificação dos técnicos', routeActive: '/gratificacao_produtividade', permission: 'usuarios.dashboard_produtividade_gratificacao', icon: 'bi bi-currency-dollar' },

    { textMenu: 'Bonificação estrutura', routeActive: '/gratificacao_produtividade_estrutura', permission: 'usuarios.dashboard_estrutura', icon: 'bi bi-currency-dollar' },

    { textMenu: 'Bonificação instalação', routeActive: '/gratificacao_produtividade_instalacao', permission: 'usuarios.dashboard_instalacao_suporte', icon: 'bi bi-currency-dollar' },

    { textMenu: 'Contas a receber', routeActive: '/contas_a_receber', permission: 'usuarios.dashboard_contas_receber', icon: 'bi bi-piggy-bank-fill'},

    { textMenu: 'Estrutura', routeActive: '/estrutura', permission: 'usuarios.dashboard_estrutura', icon: 'bi bi-building'},

    { textMenu: 'Financeiro / Service Desk', routeActive: '/financeiro_service_desk', permission: 'usuarios.dashboard_financeiro_service_desk', icon: 'bi bi-headset'},

    { textMenu: 'Faturamento', routeActive: '/faturamento', permission: 'usuarios.dashboard_faturamento', icon: 'bi bi-boxes'},

    { textMenu: 'Instalação / Suporte', routeActive: '/instalacao_suporte', permission: 'usuarios.dashboard_instalacao_suporte', icon: 'bi bi-gear-fill'},

    { textMenu: 'Vendas', routeActive: '/vendas', permission: 'usuarios.dashboard_comercial', icon: 'bi bi-cart-fill'},

    { textMenu: 'Direção', routeActive: '/direcao', permission: 'usuarios.dashboard_direcao', icon: 'bi bi-kanban-fill'},

    { textMenu: 'Frota', routeActive: '/relatorio_frota', permission: 'usuarios.dashboard_frota', icon: 'bi bi-car-front-fill'},

    { textMenu: 'Informações de Itaporanga', routeActive: '/relatorio_itaporanga', permission: 'usuarios.dashboard_itaporanga', icon: 'bi bi-geo-fill'},

    { textMenu: 'Leads', routeActive: '/relatorio_leads', permission: 'usuarios.dashboard_leads', icon: 'bi bi-person-fill-add'},

    { textMenu: 'Evolução de meta', routeActive: '/evolucao_meta', permission: 'usuarios.dashboard_tv', icon: 'bi bi-tv'},

    { textMenu: 'Ordens de Serviço', routeActive: '/relatorio_ordens_servico', permission: 'usuarios.dashboard_tv', icon: 'bi bi-chat-text-fill'},

    { textMenu: 'Marketing', routeActive: '/marketing', permission: 'usuarios.dashboard_marketing', icon: 'bi bi-bullseye'},

    { textMenu: 'Recursos Humanos', routeActive: '/relatorio_rh', permission: 'usuarios.dashboard_rh', icon: 'bi bi-clock-history'},

    { textMenu: 'CGR', routeActive: '/relatorio_cgr', permission: 'usuarios.dashboard_cgr', icon: 'bi bi-router-fill'},
  ];

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
