import { NgModule } from "@angular/core";
import { PipesModule } from "@core/pipes/pipe.module";
import { CustomsModule } from "./customs/customs.module";
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [PagesModule],
  exports: [PagesModule, CustomsModule, PipesModule]
})
export class SharedModule { }
