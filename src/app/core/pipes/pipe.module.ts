import { NgModule } from "@angular/core";
import { ShowErrorPipe } from "./show-error.pipe";
import { StatusPipe } from "./status.pipe";

@NgModule({
  declarations: [ShowErrorPipe, StatusPipe],
  exports: [ShowErrorPipe, StatusPipe]
})
export class PipesModule { }
