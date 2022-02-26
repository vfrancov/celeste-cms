import { NgModule } from "@angular/core";
import { ShowErrorPipe } from "./show-error.pipe";

@NgModule({
  declarations: [ShowErrorPipe],
  exports: [ShowErrorPipe]
})
export class PipesModule { }
