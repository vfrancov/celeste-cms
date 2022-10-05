import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { DeviceService } from "@core/services/devices.service";

export const DeviceProvider: Provider = {
  provide: RepositoryProvider.deviceRepository,
  useClass: DeviceService
}
