import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { Status } from "@core/constants/status.enum";
import { UtilsService } from "@core/services/utils.service";
import { Subscription } from "rxjs";

@Directive({
  selector: '[disableOnRequest]'
})
export class DisableOnRequestDirective implements OnInit, OnDestroy {

  private _subscription: Subscription;
  private readonly _DISABLED: string = Status.disabled;

  constructor(private element: ElementRef, private _utils: UtilsService, private _renderer: Renderer2) { }

  ngOnInit(): void {
    this.checkRequestsStatus();
  }

  checkRequestsStatus(): void {
    this._subscription = this._utils._requestOnAction.subscribe((status: boolean) => {
      this._renderer.setProperty(this.element.nativeElement, this._DISABLED, status);
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
