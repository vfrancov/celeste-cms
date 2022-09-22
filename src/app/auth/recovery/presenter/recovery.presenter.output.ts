import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

export interface RecoveryPresenterOutput {
  response: HttpResponse<any>
  errorResponse: HttpErrorResponse
  showError: boolean
  recoveryForm: FormGroup
  isLoading: boolean
}
