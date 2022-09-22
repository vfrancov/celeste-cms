import { CorePresenter } from "@core/view/core.view";
import { ResetPassword } from "@domain/auth/recovery.dto";

export interface RecoveryPresenterInput extends CorePresenter {
  sendEmailToUser(recoveryForm: ResetPassword): void
}
