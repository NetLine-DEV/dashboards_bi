import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SalesComponent } from './components/pages/sales/sales.component';
import { BillsToReceiveComponent } from './components/pages/bills-to-receive/bills-to-receive.component';
import { StructureComponent } from './components/pages/structure/structure.component';
import { FinancialComponent } from './components/pages/financial/financial.component';
import { InstallationComponent } from './components/pages/installation/installation.component';
import { DirectorsComponent } from './components/pages/directors/directors.component';
import { BillingComponent } from './components/pages/billing/billing.component';
import { accessGuard } from './guards/access.guard';
import { ProductivityGratificationComponent } from './components/pages/productivity-gratification/productivity-gratification.component';
import { AuditComponent } from './components/pages/audit/audit.component';
import { TvCommercialComponent } from './components/pages/tv-commercial/tv-commercial.component';
import { OsComponent } from './components/pages/os/os.component';
import { RhComponent } from './components/pages/rh/rh.component';
import { LeadsComponent } from './components/pages/leads/leads.component';
import { ItaporangaComponent } from './components/pages/itaporanga/itaporanga.component';
import { FleetComponent } from './components/pages/fleet/fleet.component';
import { MarketingComponent } from './components/pages/marketing/marketing.component';
import { RankingComponent } from './components/pages/ranking/ranking.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contas_a_receber',
    component: BillsToReceiveComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_contas_receber"}
  },
  {
    path: 'estrutura',
    component: StructureComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_estrutura"}

  },
  {
    path: 'financeiro_service_desk',
    component: FinancialComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_financeiro_service_desk"}
  },
  {
    path: 'faturamento',
    component: BillingComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_faturamento"}
  },
  {
    path: 'instalacao_suporte',
    component: InstallationComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_instalacao_suporte"}

  },
  {
    path: 'vendas',
    component: SalesComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_comercial"}
  },
  {
    path: 'direcao',
    component: DirectorsComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_direcao"}
  },
  {
    path: 'gratificacao_produtividade',
    component: ProductivityGratificationComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_produtividade_gratificacao"}
  },
  {
    path: 'auditoria',
    component: AuditComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_auditoria"}
  },
  {
    path: 'evolucao_meta',
    component: TvCommercialComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_tv"}
  },
  {
    path: 'relatorio_ordens_servico',
    component: OsComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_tv"}
  },
  {
    path: 'relatorio_rh',
    component: RhComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_rh"}
  },
  {
    path: 'relatorio_leads',
    component: LeadsComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_leads"}
  },
  {
    path: 'relatorio_itaporanga',
    component: ItaporangaComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_itaporanga"}
  },
  {
    path: 'relatorio_frota',
    component: FleetComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_frota"}
  },
  {
    path: 'marketing',
    component: MarketingComponent,
    canActivate: [authGuard, accessGuard],
    data: { accessRules: "usuarios.dashboard_marketing"}
  }
];
