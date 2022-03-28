import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { FloorService } from "@core/services/floor.service";

export const FloorProvider: Provider = {
  provide: RepositoryProvider.floorRepository,
  useClass: FloorService
}
