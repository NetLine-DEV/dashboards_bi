import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { authInterceptor } from './interceptors/auth-interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideHttpClient(withInterceptors([
        authInterceptor
      ])),
      provideAnimations(),
      provideToastr({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        progressBar: true,
        progressAnimation: 'decreasing',
        closeButton: true
      }),
      provideEnvironmentNgxMask(),
      
    ]
};
