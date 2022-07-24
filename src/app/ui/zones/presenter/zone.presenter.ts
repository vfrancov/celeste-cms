import { Injectable } from "@angular/core";
import { UtilsService } from "@core/services/utils.service";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CreateZone, UpdateZone, ZoneDto } from "@domain/zone/zone.dto";
import { ZoneInteractor } from "../interactor/zone.interactor";
import { ZoneInteractorOutput } from "../interactor/zone.interactor.output";
import { ZonePresenterInput } from "./zone.presenter.input";
import { ZonePresenterOutput } from "./zone.presenter.output";

@Injectable()
export class ZonePresenter implements ZonePresenterInput, ZoneInteractorOutput {
  private _view: ZonePresenterOutput;

  constructor(private _interactor: ZoneInteractor, private utils: UtilsService) {
    this._interactor.setPresenter(this);
  }

  public setView(component: ZonePresenterOutput): void {
    this._view = component;
    this._interactor.setView(component);
  }

  readAll(requestBody: IFilterRequestBody): void {
    this._interactor.readAll(requestBody);
  }

  createZone(formZone: CreateZone): void {
    this.utils.putZeroOnNullProperty(formZone);
    this._interactor.createZone(formZone);
  }

  updateZone(id: number, formZone: UpdateZone): void {
    this._interactor.updateZone(id, formZone);
  }

  deleteZone(id: number): void {
    this._interactor.deleteZone(id);
  }

  showModalZonaWithData(zone: ZoneDto): void {
    this._interactor.showModalZoneWithData(zone);
  }
}
