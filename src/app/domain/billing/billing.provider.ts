import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { BillingService } from "@core/services/billing.service";

export const BillingProvider: Provider = {
  provide: RepositoryProvider.billingProvider,
  useClass: BillingService
}
