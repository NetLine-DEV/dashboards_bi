import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { iMenuItemDrawer } from '../../models/menuItem.model';
import { initFlowbite } from 'flowbite';
import {
  LucideAngularModule,
  ClipboardCheck,
  CircleDollarSign,
  SquareKanban,
  TvMinimal,
  SquareArrowOutUpLeft,
} from 'lucide-angular';
import { LogoComponent } from '../logo/logo.component';
import { SubmenusComponent } from '../submenus/submenus.component';
import { MenusComponent } from '../menus/menus.component';
import { MenuOptionComponent } from '../menu-option/menu-option.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'sidebar-component',
  standalone: true,
  imports: [
    NgbDropdownModule,
    NgClass,
    NgIf,
    LucideAngularModule,
    LogoComponent,
    MenusComponent,
    SubmenusComponent,
    MenuOptionComponent,
    LogoutComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
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

  permissoesBonificacao: string[] = [
    'usuarios.dashboard_produtividade_gratificacao',
    'usuarios.dashboard_estrutura',
    'usuarios.dashboard_instalacao_suporte',
  ];

  permissoesGestao: string[] = [
    'usuarios.dashboard_auditoria',
    'usuarios.dashboard_cgr',
    'usuarios.dashboard_comercial',
    'usuarios.dashboard_marketing',
    'usuarios.dashboard_contas_receber',
    'usuarios.dashboard_contas_pagar',
    'usuarios.dashboard_tesouraria',
    'usuarios.dashboard_direcao',
    'usuarios.dashboard_estrutura',
    'usuarios.dashboard_financeiro_service_desk',
    'usuarios.dashboard_rh',
    'usuarios.dashboard_instalacao_suporte',
    'usuarios.dashboard_itaporanga',
    'usuarios.dashboard_frota',
    'usuarios.dashboard_migracao_uirauna',
  ];

  permissoesComercialMarketing: string[] = [
    'usuarios.dashboard_comercial',
    'usuarios.dashboard_leads',
    'usuarios.dashboard_marketing',
  ];

  permissoesTesouraria: string[] = [
    'usuarios.dashboard_tesouraria',
    'usuarios.dashboard_contas_receber',
    'usuarios.dashboard_contas_pagar',
  ];

  subMenusBonificacao: iMenuItemDrawer[] = [
    {
      route: '/gratificacao_produtividade',
      text: 'Bonificação',
      permission: 'usuarios.dashboard_produtividade_gratificacao',
    },
    {
      route: '/gratificacao_produtividade_estrutura',
      text: 'Estrutura',
      permission: 'usuarios.dashboard_estrutura',
    },
    {
      route: '/gratificacao_produtividade_instalacao',
      text: 'Instalação e Suporte',
      permission: 'usuarios.dashboard_instalacao_suporte',
    },
  ];

  subMenuComercialMarketing: iMenuItemDrawer[] = [
    {
      route: '/marketing',
      text: 'Marketing',
      permission: 'usuarios.dashboard_marketing',
    },
    {
      route: '/vendas',
      text: 'Vendas',
      permission: 'usuarios.dashboard_comercial',
    },
  ];

  subMenuTesouraria: iMenuItemDrawer[] = [
    {
      route: '/contas_a_receber',
      text: 'Contas a receber',
      permission: 'usuarios.dashboard_contas_receber',
    },
    {
      route: '/contas_a_pagar',
      text: 'Contas a pagar',
      permission: 'usuarios.dashboard_contas_pagar',
    },
    {
      route: '/tesouraria',
      text: 'Relatório Tesouraria',
      permission: 'usuarios.dashboard_tesouraria',
    },
  ];

  subMenusTV: iMenuItemDrawer[] = [
    {
      route: '/evolucao_meta',
      text: 'Meta',
      permission: 'usuarios.dashboard_tv',
    },
    {
      route: '/relatorio_ordens_servico',
      text: 'OS',
      permission: 'usuarios.dashboard_tv',
    },
  ];

  listMenuOptions: any[] = [
    {
      text: 'Auditoria',
      route: '/auditoria',
      permission: 'usuarios.dashboard_auditoria',
    },

    {
      text: 'CGR',
      route: '/relatorio_cgr',
      permission: 'usuarios.dashboard_cgr',
    },

    {
      text: 'Direção',
      route: '/direcao',
      permission: 'usuarios.dashboard_direcao',
    },

    {
      text: 'Estrutura',
      route: '/estrutura',
      permission: 'usuarios.dashboard_estrutura',
    },

    {
      text: 'Faturamento',
      route: '/faturamento',
      permission: 'usuarios.dashboard_faturamento',
    },

    {
      text: 'Financeiro / Service desk',
      route: '/financeiro_service_desk',
      permission: 'usuarios.dashboard_financeiro_service_desk',
    },

    {
      text: 'Frota',
      route: '/relatorio_frota',
      permission: 'usuarios.dashboard_frota',
    },

    {
      text: 'Itaporanga',
      route: '/relatorio_itaporanga',
      permission: 'usuarios.dashboard_itaporanga',
    },

    {
      text: 'Recursos humanos',
      route: '/relatorio_rh',
      permission: 'usuarios.dashboard_rh',
    },

    {
      text: 'Serviço e suporte',
      route: '/instalacao_suporte',
      permission: 'usuarios.dashboard_instalacao_suporte',
    },

    {
      text: 'Migração Uiraúna',
      route: '/migracao_uirauna',
      permission: 'usuarios.dashboard_migracao_uirauna',
    },

    {
      text: 'Organograma',
      route: '/organograma',
      permission: 'usuarios.dashboard_direcao',
    },
  ];

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
    return rules.some((permission) => this.hasPermission(permission));
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
