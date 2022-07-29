import { Inject, Injectable } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CreateZone, UpdateZone, ZoneDto } from "@domain/zone/zone.dto";
import { IZoneRepository } from "@domain/zone/zone.repository";
import { ZonePresenterOutput } from "../presenter/zone.presenter.output";
import { ZoneInteractorOutput } from "./zone.interactor.output";
import swal, { SweetAlertResult } from 'sweetalert2';
import { zoneCreated, zoneDeleted, zoneUpdated, zoneWarning } from "@core/constants/sweetalert.config";
import { HttpErrorResponse } from "@angular/common/http";
import { RequestAction } from "@core/constants/requestactions.enum";

@Injectable()
export class ZoneInteractor implements ZoneInteractorOutput {
  private _presenter: ZoneInteractorOutput;
  private _view: ZonePresenterOutput;

  constructor(
    @Inject(RepositoryProvider.zoneRepository) private zoneService: IZoneRepository
  ) { }

  setPresenter(presenter: ZoneInteractorOutput): void {
    this._presenter = presenter;
  }

  setView(view: ZonePresenterOutput): void {
    this._view = view;
  }

  readAll(requestBody: IFilterRequestBody): void {
    this.zoneService.readAll(requestBody).subscribe(
      response => {
        this._view.zoneData = response.body.list;
        this._view.amountOfPages = response.body.pages;
        this._view.amountOfRows = response.body.records;
      }
    );
  }

  createZone(formZone: CreateZone): void {
    this.zoneService.createZone(formZone).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this._view.modalCreateAndEditZone.closeModal();
        swal.fire(zoneCreated);
        this._view.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this._view.zoneErrorService = error;
      this._view.showErrorZoneService = !error.ok;
    });
  }

  updateZone(id: number, formZone: UpdateZone): void {
    this.zoneService.updateZone(id, formZone).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this._view.modalCreateAndEditZone.closeModal();
        swal.fire(zoneUpdated);
        this._view.isEditZone = false;
        this._view.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this._view.zoneErrorService = error;
      this._view.showErrorZoneService = !error.ok;
    });
  }

  deleteZone(id: number): void {
    swal.fire(zoneWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.zoneService.deleteZone(id, RequestAction.delete).subscribe(response => {
          if (response.status === HttpStatusCode.Ok) {
            swal.fire(zoneDeleted);
            this._view.readAll();
          }
        });
      }
    });
  }

  showModalZoneWithData(zone: ZoneDto): void {
    this._view.showErrorZoneService = false;
    this.zoneService.getZoneById(zone.id).subscribe(response => {
      this._view.formZone.patchValue(response.body);
      this._view.isEditZone = true;
      this._view.zone = response.body;
    });
  }
}
