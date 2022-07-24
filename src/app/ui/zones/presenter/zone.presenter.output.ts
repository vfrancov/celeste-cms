import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { ZoneDto } from "@domain/zone/zone.dto";

export interface ZonePresenterOutput {
  zoneData: ZoneDto[]
  modalCreateAndEditZone: IModalComponent
  amountOfPages: number
  amountOfRows: number
  zoneErrorService: HttpErrorResponse
  showErrorZoneService: boolean
  isEditZone: boolean
  formZone: FormGroup
  zone: ZoneDto
  readAll(): void
}
