import { Provider } from "@angular/core";
import { SubNoveltieService } from "@core/services/subnoveltie.service";

export const SubNoveltieProvider: Provider = {
  provide: 'subNoveltieProvider',
  useClass: SubNoveltieService
}