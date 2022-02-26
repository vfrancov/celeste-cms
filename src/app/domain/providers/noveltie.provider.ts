import { Provider } from "@angular/core";
import { NoveltieService } from "@core/services/noveltie.service";

export const NoveltieProvider: Provider = {
  provide: 'noveltieProvider',
  useClass: NoveltieService
}
