import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { Navigation } from "@core/constants/navigataion.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { ILocalStorageRepository } from "@domain/localstorage/localstorage.repository";
import { UserDto } from "@domain/user/user.dto";
import { BehaviorSubject, Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { UtilsService } from "./utils.service";

@Injectable()
export class HttpConfigService implements HttpInterceptor {

  constructor(
    @Inject(RepositoryProvider.localStorageProvider) private localStorage: ILocalStorageRepository,
    private _utils: UtilsService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const getToken: UserDto = this.localStorage.getItem(Navigation.userSession);
    let request = req;

    if (getToken) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${getToken.token}`
        }
      });

      this._utils._requestOnAction.next(true);
    };

    return next.handle(request).pipe(finalize(() => this._utils._requestOnAction.next(false)));
  }
}

export const authInterceptorProvider: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpConfigService, multi: true }
]
