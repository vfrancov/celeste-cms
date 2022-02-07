import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";

@Component({
  selector: 'alert-message',
  templateUrl: './alert.component.html'
})
export class AlertMessageComponent {
  @Input() error: HttpErrorResponse;
  @Input() response: HttpResponse<any>;
  statusCode = HttpStatusCode;

  get noContentResponse(): boolean {
    return this.response?.status === this.statusCode.NoContent;
  }
}
