import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { LocalStorageService } from "@core/services/localstorage.service";

export const LocalStorageProvider: Provider = {
  provide: RepositoryProvider.localStorageProvider,
  useClass: LocalStorageService
}
