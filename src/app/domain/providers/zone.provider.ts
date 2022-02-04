import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { ZonesService } from "@core/services/zones.service";

export const ZoneProvider: Provider = {
  provide: RepositoryProvider.zoneRepository,
  useClass: ZonesService
}
