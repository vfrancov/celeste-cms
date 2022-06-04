import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { CoreDataTable } from "@core/view/core.datatable";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { FloorDto } from "@domain/floor/floor.dto";

export interface IFloorPresenterOutput {
  floorData: FloorDto[];
  amountOfPages: number;
  amountOfRows: number;
  modalCreateAndEditFloor: IModalComponent;
  floorErrorService: HttpErrorResponse;
  showErrorFloorService: boolean;
  formFloor: FormGroup;
  isEditFloor: boolean;
  floor: FloorDto;
  myResultValue: number;
  readAll(): void;
}
