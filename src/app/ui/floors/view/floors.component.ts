import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { floorFields } from "@core/constants/floor.field";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { dataTableHeadFloors } from "@core/constants/table.headers";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { DeleteFloor, FloorDto, GetFloor } from "@domain/floor/floor.dto";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { UserPermissions } from "@domain/shared/menu.dto";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { IFloorPresenterInput } from "../presenter/floors.presenter.input";
import { IFloorPresenterOutput } from "../presenter/floors.presenter.output";

@Component({
  selector: 'floors-component',
  templateUrl: './floors.component.html'
})
export class FloorsPageComponent implements OnInit, IFloorPresenterOutput {

  @ViewChild('modalCreateAndEditFloor') modalCreateAndEditFloor: IModalComponent;

  dataTableHead: string[] = dataTableHeadFloors;
  floorData: FloorDto[] = [];
  requestBody: IFilterRequestBody = new RequestBody;
  formFloor: FormGroup;
  floorErrorService: HttpErrorResponse;
  showErrorFloorService: boolean;
  isEditFloor: boolean = false;
  floor: FloorDto;
  userPermissions: UserPermissions;
  isDescOrAsc: boolean = false;
  amountOfPages: number;
  amountOfRows: number;

  constructor(
    @Inject(RepositoryProvider.userPermissions) private _permissions: IUserPermissionsRepository,
    @Inject('FloorPresenterInput') private _presenter: IFloorPresenterInput,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this.userPermissions = this._permissions.getPermissions(this._router.url);
    this._presenter.setView(this);
  }

  ngOnInit(): void {
    this.readAll();
    this.initializeFloorForm();
  }

  readAll(): void {
    this._presenter.readAll(this.requestBody);
  }

  initializeFloorForm(): void {
    this.formFloor = this.formBuilder.group(floorFields);
  }

  createFloor(): void {
    this._presenter.createFloor(this.formFloor.value);
  }

  showModalFloorWithData(floor: GetFloor): void {
    this._presenter.showModalFloorWithData(floor);
  }

  showModalCreateFloor(): void {
    this.isEditFloor = false;
    this.formFloor.reset();
    this.showErrorFloorService = false;
  }

  updateFloor(): void {
    this._presenter.updateFloor(this.floor.id, this.formFloor.value);
  }

  deleteFloor(floor: DeleteFloor): void {
    this._presenter.deleteFloor(floor.id);
  }

  sortDatatable(fieldToSort: string): void {
    this.isDescOrAsc = !this.isDescOrAsc;
    this.requestBody.sortDatatable(fieldToSort, this.isDescOrAsc);
    this.readAll();
  }

  applyFilter(filter: any): void {
    this.requestBody.applyFilter(filter);
    this.readAll();
  }

  restoreFilter(page: number): void {
    this.requestBody.restoreFilter(page);
    this.readAll();
  }

  selectedPage(page: number): void {
    this.requestBody.selectedPage(page);
    this.readAll();
  }
}
