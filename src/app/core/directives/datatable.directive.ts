import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: '[dataTableTemplate]'
})
export class DataTableTemplateDirective {

  constructor(public templateReference: TemplateRef<unknown>) { }
}
