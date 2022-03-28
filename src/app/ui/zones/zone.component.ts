import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { zoneCreated, zoneDeleted, zoneUpdated, zoneWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadZones } from "@core/constants/table.headers";
import { zoneFields } from "@core/constants/zones.field";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
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

  constructor(
    @Inject(RepositoryProvider.zoneRepository) private zoneService: IZoneRepository,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.readAll();
    this.initializeZoneForm();
  }

  readAll(): void {
    this.zoneService.readAll(this.requestBody).subscribe(
      response => this.zoneData = response.body.list
    );
  }

  initializeZoneForm(): void {
    this.formZone = this.formBuilder.group(zoneFields);
  }

  createZone(): void {
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
    this.zoneService.getZoneById(zone.id).subscribe(response => {
      this.formZone.patchValue(response.body);
      this.isEditZone = true;
      this.zone = response.body;
    })
  }

  showModalCreateZone(): void {
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
}
