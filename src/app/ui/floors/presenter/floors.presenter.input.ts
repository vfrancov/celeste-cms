import { FormGroup } from "@angular/forms";
import { CorePresenter } from "@core/view/core.view";
import { CreateFloor, GetFloor, UpdateFloor } from "@domain/floor/floor.dto";
import { IFilterRequestBody } from "@domain/http/request.body.dto";

export interface IFloorPresenterInput extends CorePresenter {
  readAll(requestBody: IFilterRequestBody): void;
  createFloor(formFloor: CreateFloor): void;
  showModalFloorWithData(floor: GetFloor): void;
  updateFloor(id: number, formFloor: UpdateFloor): void;
  deleteFloor(id: number): void;
}
