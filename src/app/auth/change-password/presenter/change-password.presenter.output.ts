import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

export interface ChangePasswordPresenterOutput {
  changePasswordForm: FormGroup
  errorResponse: HttpErrorResponse
  showError: boolean
  isLoading: boolean
}
