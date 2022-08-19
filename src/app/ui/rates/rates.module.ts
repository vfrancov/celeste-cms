import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RateProvider } from '@domain/rates/rates.provider';
import { DataTableModule } from '@shared/customs/data-table/datatable.module';
import { SharedModule } from '@shared/shared.module';
import { RatesInteractor } from './interactor/rates.interactor';
import { RatesPresenter } from './presenter/rates.presenter';
import { ratesRoutes } from './rates.routing';
import { RatePageComponent } from './view/rates.component';

@NgModule({
  declarations: [RatePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    RouterModule.forChild(ratesRoutes)
  ],
  providers: [
    RateProvider,
    { provide: 'RatesPresenter', useClass: RatesPresenter },
    RatesInteractor
  ]
})
export class RateModule { }
