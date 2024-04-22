import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { inject } from '@angular/core';

export const accessGuard: CanActivateFn = (route, state) => {

  const authService = inject(LoginService);
  const router = inject(Router);

  const access = route.data['accessRules'];
  const permissions = authService.decodedToken();

  if (permissions.includes(access)) {
    return true;
  }

  return false;
};
