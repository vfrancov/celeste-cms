import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { authInterceptorProvider } from '@core/services/interceptor.service';
import { LocalStorageProvider } from '@domain/localstorage/localstorage.provider';
import { UserPermissionsProvider } from '@domain/user/userpermissions.provider';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LocalStorageProvider,
    authInterceptorProvider,
    UserPermissionsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
