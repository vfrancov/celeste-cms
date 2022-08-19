import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RatesService } from "@core/services/rates.service";

export const RateProvider: Provider = {
  provide: RepositoryProvider.rateRepository,
  useClass: RatesService
}
