import { HttpResponse } from "@angular/common/http";
import { CorePresenter } from "@core/view/core.view";
import { ChangePassword } from "@domain/user/user.dto";
import { Observable } from "rxjs";

export interface ChangePasswordPresenterInput extends CorePresenter {
  changePassword(payload: ChangePassword): void
}
