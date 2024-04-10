import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = '1234567890';
  const authService = inject(AuthService);

  if (authService.isAuthenticated) {
    // Token in Header einfügen
    const reqWithToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next(reqWithToken);
  } else {
    // Request unverändert weitergeben
    return next(req);
  }
};
