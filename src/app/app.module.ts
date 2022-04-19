import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { authInterceptorProvider } from '@core/services/interceptor.service';
import { LocalStorageProvider } from '@domain/localstorage/localstorage.provider';
import { UserPermissionsProvider } from '@domain/user/userpermissions.provider';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NvD3Module
  ],
  providers: [
    LocalStorageProvider,
    authInterceptorProvider,
    UserPermissionsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
