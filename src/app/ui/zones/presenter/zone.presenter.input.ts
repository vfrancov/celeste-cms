import { CorePresenter } from "@core/view/core.view";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CreateZone, GetZone, UpdateZone } from "@domain/zone/zone.dto";

export interface ZonePresenterInput extends CorePresenter {
  readAll(requestBody: IFilterRequestBody): void
  createZone(formZone: CreateZone): void
  showModalZonaWithData(zone: GetZone): void;
  updateZone(id: number, formZone: UpdateZone): void;
  deleteZone(id: number): void;
}
