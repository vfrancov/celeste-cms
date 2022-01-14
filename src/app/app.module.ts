import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from '@core/guards/auth.guard';
import { LocalStorageProvider } from '@domain/localstorage/localstorage.provider';
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
  providers: [LocalStorageProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
