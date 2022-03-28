import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { CompaniesService } from "@core/services/companies.service";

export const CompanieProvider: Provider = {
  provide: RepositoryProvider.companieRepository,
  useClass: CompaniesService
}
