import { Form, FormGroup } from "@angular/forms";
import { CorePresenter } from "@core/view/core.view";
import { GetFloor } from "@domain/floor/floor.dto";
import { IFilterRequestBody } from "@domain/http/request.body.dto";

export interface IFloorPresenterInput extends CorePresenter {
  readAll(requestBody: IFilterRequestBody): void;
  createFloor(formFloor: FormGroup): void;
  showModalFloorWithData(floor: GetFloor): void;
  updateFloor(id: number, formFloor: FormGroup): void;
  deleteFloor(id: number): void;
}
