import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";

@Component({
  selector: 'alert-message',
  templateUrl: './alert.component.html'
})
export class AlertMessageComponent {
  @Input() error: HttpErrorResponse;
  @Input() response: HttpResponse<any>;
  @Input() details: boolean = true;
  statusCode = HttpStatusCode;

  get noContentResponse(): boolean {
    return this.response?.status === this.statusCode.NoContent;
  }
}
