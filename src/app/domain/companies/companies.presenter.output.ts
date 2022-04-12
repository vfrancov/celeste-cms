import { HttpErrorResponse } from "@angular/common/http";
import { CompaniesDto, GetCompanie } from "./companies.dto";

export interface CompaniesPresenterOutput {
    isCompanieCreated(status: boolean, error?: HttpErrorResponse): void
    showCompanieRecords(records: CompaniesDto[]);
    setDataInModal(companie: GetCompanie): void
}