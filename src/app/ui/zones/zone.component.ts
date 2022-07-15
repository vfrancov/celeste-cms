import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { zoneCreated, zoneDeleted, zoneUpdated, zoneWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadZones } from "@core/constants/table.headers";
import { zoneFields } from "@core/constants/zones.field";
import { UtilsService } from "@core/services/utils.service";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { UserPermissions } from "@domain/shared/menu.dto";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { ZoneDto } from "@domain/zone/zone.dto";
import { IZoneRepository } from "@domain/zone/zone.repository";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'zone-component',
  templateUrl: './zone.component.html'
})
export class ZonePageComponent implements OnInit {

  @ViewChild('modalCreateAndEditZone') modalCreateAndEditZone: ModalComponent;

  dataTableHead: string[] = dataTableHeadZones;
  zoneData: ZoneDto[] = [];
  requestBody: IFilterRequestBody = new RequestBody;
  formZone: FormGroup;
  isEditZone: boolean = false;
  zoneErrorService: HttpErrorResponse;
  showErrorZoneService: boolean;
  zone: ZoneDto;
  public userPermissions: UserPermissions;
  public isDescOrAsc: boolean = false;
  amountOfPages: number;
  amountOfRows: number;

  constructor(
    @Inject(RepositoryProvider.zoneRepository) private zoneService: IZoneRepository,
    @Inject(RepositoryProvider.userPermissions) private _permissions: IUserPermissionsRepository,
    private _router: Router,
    private formBuilder: FormBuilder,
    private utils: UtilsService
  ) {
    this.userPermissions = this._permissions.getPermissions(this._router.url);
  }

  ngOnInit(): void {
    this.readAll();
    this.initializeZoneForm();
  }

  readAll(): void {
    this.zoneService.readAll(this.requestBody).subscribe(
      response => {
        this.zoneData = response.body.list;
        this.amountOfPages = response.body.pages;
        this.amountOfRows = response.body.records;
      }
    );
  }

  initializeZoneForm(): void {
    this.formZone = this.formBuilder.group(zoneFields);
  }

  createZone(): void {
    this.utils.putZeroOnNullProperty(this.formZone.value);
    this.zoneService.createZone(this.formZone.value).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this.modalCreateAndEditZone.closeModal();
        swal.fire(zoneCreated);
        this.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this.zoneErrorService = error;
      this.showErrorZoneService = !error.ok;
    });
  }

  showModalZonaWithData(zone: ZoneDto): void {
    this.showErrorZoneService = false;
    this.zoneService.getZoneById(zone.id).subscribe(response => {
      this.formZone.patchValue(response.body);
      this.isEditZone = true;
      this.zone = response.body;
    })
  }

  showModalCreateZone(): void {
    this.showErrorZoneService = false;
    this.isEditZone = false;
    this.formZone.reset();
  }

  updateZone(): void {
    this.zoneService.updateZone(this.zone.id, this.formZone.value).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this.modalCreateAndEditZone.closeModal();
        swal.fire(zoneUpdated);
        this.isEditZone = false;
        this.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this.zoneErrorService = error;
      this.showErrorZoneService = !error.ok;
    });
  }

  deleteZone(zone: ZoneDto): void {
    swal.fire(zoneWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.zoneService.deleteZone(zone.id, RequestAction.delete).subscribe(response => {
          if (response.status === HttpStatusCode.Ok) {
            swal.fire(zoneDeleted);
            this.readAll();
          }
        });
      }
    });
  }

  sort(fieldToSort: string): void {
    this.isDescOrAsc = !this.isDescOrAsc;
    this.requestBody.sort[0].field = fieldToSort;
    this.requestBody.sort[0].dir = (this.isDescOrAsc) ? 'desc' : 'asc';

    this.readAll();
  }

  applyFilter(filter: any): void {
    this.requestBody.filter = filter.filter;
    this.readAll();
  }

  restoreFilter(event: any): void {
    this.requestBody = new RequestBody;
    this.readAll();
  }

  selectedPage(page: number): void {
    this.requestBody.offset = page;
    this.readAll();
  }
}
