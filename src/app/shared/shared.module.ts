import { NgModule } from "@angular/core";
import { CustomsModule } from "./customs/customs.module";
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [PagesModule],
  exports: [PagesModule, CustomsModule]
})
export class SharedModule { }
