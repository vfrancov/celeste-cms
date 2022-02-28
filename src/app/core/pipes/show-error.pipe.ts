import { HttpErrorResponse } from "@angular/common/http";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'showErrors'
})
export class ShowErrorPipe implements PipeTransform {
  transform(errors: HttpErrorResponse): string {
    let result: string;
    Object.keys(errors.error?.errors).forEach(key => result = errors.error?.errors[key].join(', '));
    return result;
  }
}
