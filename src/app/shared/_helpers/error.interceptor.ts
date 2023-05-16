import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthorizationAppService } from '../services/authorization.app.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  public constructor(private authenticationAppService: AuthorizationAppService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if ([401, 403].indexOf(err.status) !== -1) {
          // Auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this.authenticationAppService.logout();
          // tslint:disable-next-line: deprecation
          location.reload(true);
        }
        const error = err.message || err.error?.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
