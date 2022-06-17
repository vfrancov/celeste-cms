import { NgModule } from "@angular/core";
import { DisableOnRequestDirective } from "@core/directives/disable-on-request.directive";
import { PipesModule } from "@core/pipes/pipe.module";
import { CustomsModule } from "./customs/customs.module";
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [DisableOnRequestDirective, DisableOnRequestDirective],
  imports: [PagesModule],
  exports: [PagesModule, CustomsModule, PipesModule, DisableOnRequestDirective]
})
export class SharedModule { }
