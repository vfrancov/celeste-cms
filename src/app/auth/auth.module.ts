import { AuthProvider } from '../domain/auth/auth.provider';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { authRoute } from "./auth.routing";
import { AuthLoginComponent } from "./login/login.component";
import { SharedModule } from '@shared/shared.module';
import { RecoveryViewComponent } from './recovery/view/recovery.component';
import { ChangePasswordViewComponent } from './change-password/view/change-password.component';
import { RecoveryPresenter } from './recovery/presenter/recovery.presenter';
import { RecoveryInteractor } from './recovery/interactor/recovery.interactor';
import { ChangePasswordPresenter } from './change-password/presenter/change-password.presenter';
import { ChangePasswordInteractor } from './change-password/interactor/change-password.interactor';


@NgModule({
  declarations: [AuthLoginComponent, RecoveryViewComponent, ChangePasswordViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(authRoute)
  ],
  providers: [
    AuthProvider,
    { provide: 'RecoveryPresenter', useClass: RecoveryPresenter },
    { provide: 'ChangePasswordPresenter', useClass: ChangePasswordPresenter },
    RecoveryInteractor,
    ChangePasswordInteractor
  ]
})
export class AuthModule { }
