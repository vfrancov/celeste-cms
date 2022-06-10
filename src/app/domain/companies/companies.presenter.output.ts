import { HttpErrorResponse } from "@angular/common/http";
import { CompaniesDto, GetCompanie } from "./companies.dto";
import { IModalComponent } from "./IModalComponent";

export interface CompaniesPresenterOutput {
  modalCompanie: IModalComponent;
  isCompanieCreated(status: boolean, error?: HttpErrorResponse): void;
  showCompanieRecords(records: CompaniesDto[], pages: number, rows: number);
  setDataInModal(companie: GetCompanie): void
  getAllCompanies(): void
}
