import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { Navigation } from "@core/constants/navigataion.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { messageSessionDestroy } from "@core/constants/sweetalert.config";
import { ILocalStorageRepository } from "@domain/localstorage/localstorage.repository";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import swal, { SweetAlertResult } from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    @Inject(RepositoryProvider.localStorageProvider) private localStorage: ILocalStorageRepository,
    private _router: Router) { }

  intercept(req: HttpRequest<HttpErrorResponse>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {

      if (error.status === HttpStatusCode.Unauthorized) {
        this.localStorage.removeItem();

        swal.fire(messageSessionDestroy).then((action: SweetAlertResult) => {
          if (action.isConfirmed)
            this._router.navigate([Navigation.login]);
        });
      }

      if (error.status >= HttpStatusCode.InternalServerError || error.status >= HttpStatusCode.NotFound)
        swal.fire(messageSessionDestroy).then(action => {
          if (action.isConfirmed)
            this._router.navigate([Navigation.login]);
        });

      return throwError(error);
    }));
  }
}

export const errorInterceptorProvider: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
]
