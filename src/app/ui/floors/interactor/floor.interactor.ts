import { HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { floorDeleted, floorSuccess, floorUpdated, floorWarning } from "@core/constants/sweetalert.config";
import { CreateFloor, GetFloor, UpdateFloor } from "@domain/floor/floor.dto";
import { IFloorRepository } from "@domain/floor/floor.repository";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import swal, { SweetAlertResult } from 'sweetalert2';
import { IFloorPresenterOutput } from "../presenter/floors.presenter.output";
import { IFloorInteractorInput } from "./floor.interactor.input";
import { IFloorInteractorOutput } from "./floor.interactor.output";

@Injectable()
export class FloorInteractor implements IFloorInteractorInput {
  private _presenter: IFloorInteractorOutput;
  private _view: IFloorPresenterOutput;

  constructor(@Inject(RepositoryProvider.floorRepository) private floorService: IFloorRepository) { }

  setPresenter(presenter: IFloorInteractorOutput): void {
    this._presenter = presenter;
  }

  setView(view: IFloorPresenterOutput): void {
    this._view = view;
  }

  readAll(requestBody: IFilterRequestBody): void {
    this.floorService.readAll(requestBody).subscribe(
      (response) => {
        this._view.floorData = response.body.list;
        this._view.amountOfPages = response.body.pages;
        this._view.amountOfRows = response.body.records;
      }
    );
  }

  createFloor(formFloor: CreateFloor): void {
    this.floorService.createFloor(formFloor).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this._view.modalCreateAndEditFloor.closeModal();
        swal.fire(floorSuccess);
        this._view.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this._view.floorErrorService = error;
      this._view.showErrorFloorService = !error.ok;
    });
  }

  updateFloor(id: number, formFloor: UpdateFloor): void {
    this.floorService.updateFloor(id, formFloor).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this._view.modalCreateAndEditFloor.closeModal();
        swal.fire(floorUpdated);
        this._view.isEditFloor = false;
        this._view.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this._view.floorErrorService = error;
      this._view.showErrorFloorService = !error.ok;
    });
  }

  deleteFloor(id: number): void {
    swal.fire(floorWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.floorService.deleteFloor(id, RequestAction.delete).subscribe(response => {
          if (response.status === HttpStatusCode.Ok) {
            swal.fire(floorDeleted);
            this._view.readAll();
          }
        });
      }
    });
  }

  showModalFloorWithData(floor: GetFloor): void {
    this._view.showErrorFloorService = false;
    this.floorService.getFloorById(floor.id).subscribe(response => {
      this._view.formFloor.patchValue(response.body);
      this._view.isEditFloor = true;
      this._view.floor = response.body;
    }, (error: HttpErrorResponse) => {
      swal.fire('Error Service', `${error.statusText} ${error.url} ${error.name}`, 'warning');
    });
  }
}
