import { HttpErrorResponse } from "@angular/common/http";
import { CompaniesDto, GetCompanie } from "./companies.dto";

export interface CompaniesPresenterOutput {
    isCompanieCreated(status: boolean, error?: HttpErrorResponse): void
    showCompanieRecords(records: CompaniesDto[], pages: number, rows: number);
    setDataInModal(companie: GetCompanie): void
}
