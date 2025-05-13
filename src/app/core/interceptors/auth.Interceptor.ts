import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const authToken = auth.getToken();

  if (authToken) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    return next(authReq);
  }

  return next(req);
};
