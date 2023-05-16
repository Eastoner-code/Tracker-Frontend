import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true
    });

    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            ///
          }
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) console.error('Unauthorized');
          }
        }
      )
    );
  }
}
