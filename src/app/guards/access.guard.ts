import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { inject } from '@angular/core';

export const accessGuard: CanActivateFn = (route, state) => {

  const authService = inject(LoginService);
  const router = inject(Router);

  const access = route.data['accessRules'];
  const data_user = authService.decodedToken()
  const permissions = data_user.permissoes;

  if (permissions.includes(access)) {
    return true;
  }

  return false;
};
