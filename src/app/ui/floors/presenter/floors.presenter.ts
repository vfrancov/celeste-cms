import { Injectable } from "@angular/core";
import { CreateFloor, GetFloor, UpdateFloor } from "@domain/floor/floor.dto";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { FloorInteractor } from "../interactor/floor.interactor";
import { IFloorInteractorOutput } from "../interactor/floor.interactor.output";
import { IFloorPresenterInput } from "./floors.presenter.input";
import { IFloorPresenterOutput } from "./floors.presenter.output";

@Injectable()
export class FloorPresenter implements IFloorPresenterInput, IFloorInteractorOutput {
  private _view: IFloorPresenterOutput;

  constructor(private _interactor: FloorInteractor) {
    this._interactor.setPresenter(this);
  }

  setView(component: IFloorPresenterOutput): void {
    this._view = component;
    this._interactor.setView(component);
  }

  readAll(requestBody: IFilterRequestBody): void {
    this._interactor.readAll(requestBody);
  }

  createFloor(formFloor: CreateFloor): void {
    this._interactor.createFloor(formFloor);
  }

  updateFloor(id: number, formFloor: UpdateFloor): void {
    this._interactor.updateFloor(id, formFloor);
  }

  deleteFloor(id: number): void {
    this._interactor.deleteFloor(id);
  }

  showModalFloorWithData(floor: GetFloor): void {
    this._interactor.showModalFloorWithData(floor);
  }
}
