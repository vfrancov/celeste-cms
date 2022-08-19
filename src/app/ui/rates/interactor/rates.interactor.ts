import { Inject, Injectable } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CreateRate, RatesDto, UpdateRate } from "@domain/rates/rates.dto";
import { RatePresenterOutput } from "../presenter/rates.presenter.output";
import swal, { SweetAlertResult } from 'sweetalert2';
import { HttpErrorResponse } from "@angular/common/http";
import { RequestAction } from "@core/constants/requestactions.enum";
import { rateCreated, rateDeleted, rateUpdated, rateWarning } from "@core/constants/sweetalert.config";
import { IRateRepository } from "@domain/rates/rates.repository";

@Injectable()
export class RatesInteractor {
  private _view: RatePresenterOutput;
  private _presenter: any;

  constructor(@Inject(RepositoryProvider.rateRepository) private rateService: IRateRepository) { }

  setPresenter(presenter: any): void {
    this._presenter = presenter;
  }

  setView(view: RatePresenterOutput): void {
    this._view = view;
  }

  readAll(requestBody: IFilterRequestBody): void {
    this.rateService.readAll(requestBody).subscribe(
      response => {
        this._view.ratesData = response.body.list;
        this._view.amountOfPages = response.body.pages;
        this._view.amountOfRows = response.body.records;
      }
    );
  }

  createRate(formRate: CreateRate): void {
    this.rateService.createRate(formRate).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this._view.modalCreateAndEditRate.closeModal();
        swal.fire(rateCreated);
        this._view.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this._view.rateErrorService = error;
      this._view.showErrorRateService = !error.ok;
    });
  }

  updateRate(id: number, formRate: UpdateRate): void {
    this.rateService.updateRate(id, formRate).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this._view.modalCreateAndEditRate.closeModal();
        swal.fire(rateUpdated);
        this._view.isEditRate = false;
        this._view.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this._view.rateErrorService = error;
      this._view.showErrorRateService = !error.ok;
    });
  }

  deleteRate(id: number): void {
    swal.fire(rateWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.rateService.deleteRate(id, RequestAction.delete).subscribe(response => {
          if (response.status === HttpStatusCode.Ok) {
            swal.fire(rateDeleted);
            this._view.readAll();
          }
        });
      }
    });
  }

  showModalWithRateData(rate: RatesDto): void {
    this._view.showErrorRateService = false;
    this.rateService.getRateById(rate.id).subscribe(response => {
      this._view.formRates.patchValue(response.body);
      this._view.isEditRate = true;
      this._view.rates = response.body;
    });
  }
}
