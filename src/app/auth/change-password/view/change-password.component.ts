import { Component } from "@angular/core";

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordViewComponent {

  public showMessageChangePassword: boolean;

  changePassword(): void {
    this.showMessageChangePassword = true;
  }
}
