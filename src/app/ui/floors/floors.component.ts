import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { floorFields } from "@core/constants/floor.field";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { floorDeleted, floorSuccess, floorUpdated, floorWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadFloors } from "@core/constants/table.headers";
import { DeleteFloor, FloorDto, GetFloor } from "@domain/floor/floor.dto";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { IFloorRepository } from "@domain/floor/floor.repository";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal, { SweetAlertResult } from 'sweetalert2';
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { UserPermissions } from "@domain/shared/menu.dto";
import { Router } from "@angular/router";

@Component({
  selector: 'floors-component',
  templateUrl: './floors.component.html'
})
export class FloorsPageComponent implements OnInit {

  @ViewChild('modalCreateAndEditFloor') modalCreateAndEditFloor: ModalComponent;

  dataTableHead: string[] = dataTableHeadFloors;
  floorData: FloorDto[] = [];
  requestBody: IFilterRequestBody = new RequestBody;
  formFloor: FormGroup;
  floorErrorService: HttpErrorResponse;
  showErrorFloorService: boolean;
  isEditFloor: boolean = false;
  floor: FloorDto;
  userPermissions: UserPermissions;

  constructor(
    @Inject(RepositoryProvider.floorRepository) private floorService: IFloorRepository,
    @Inject(RepositoryProvider.userPermissions) private _permissions: IUserPermissionsRepository,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this.userPermissions = this._permissions.getPermissions(this._router.url);
  }

  ngOnInit(): void {
    this.readAll();
    this.initializeFloorForm();
  }

  readAll(): void {
    this.floorService.readAll(this.requestBody).subscribe(
      response => this.floorData = response.body.list
    );
  }

  initializeFloorForm(): void {
    this.formFloor = this.formBuilder.group(floorFields);
  }

  createFloor(): void {
    this.floorService.createFloor(this.formFloor.value).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this.modalCreateAndEditFloor.closeModal();
        swal.fire(floorSuccess);
        this.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this.floorErrorService = error;
      this.showErrorFloorService = !error.ok;
    });
  }

  showModalFloorWithData(floor: GetFloor): void {
    this.floorService.getFloorById(floor.id).subscribe(response => {
      this.formFloor.patchValue(response.body);
      this.isEditFloor = true;
      this.floor = response.body;
    });
  }

  showModalCreateFloor(): void {
    this.isEditFloor = false;
    this.formFloor.reset();
  }

  updateFloor(): void {
    this.floorService.updateFloor(this.floor.id, this.formFloor.value).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this.modalCreateAndEditFloor.closeModal();
        swal.fire(floorUpdated);
        this.isEditFloor = false;
        this.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this.floorErrorService = error;
      this.showErrorFloorService = !error.ok;
    });
  }

  deleteFloor(floor: DeleteFloor): void {
    swal.fire(floorWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.floorService.deleteFloor(floor.id, RequestAction.delete).subscribe(response => {
          if (response.status === HttpStatusCode.Ok) {
            swal.fire(floorDeleted);
            this.readAll();
          }
        });
      }
    });
  }
}
