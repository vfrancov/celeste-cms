import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { RatesDto } from "@domain/rates/rates.dto";
import { UserPermissions } from "@domain/shared/menu.dto";

export interface RatePresenterOutput {
  modalCreateAndEditRate: IModalComponent;
  dataTableHead: string[];
  ratesData: RatesDto[];
  userPermissions: UserPermissions;
  requestBody: IFilterRequestBody;
  formRates: FormGroup;
  showErrorRateService: boolean;
  rateErrorService: HttpErrorResponse;
  rates: RatesDto;
  isEditRate: boolean;
  isDescOrAsc: boolean;
  amountOfPages: number;
  amountOfRows: number;
  readAll(): void
}
