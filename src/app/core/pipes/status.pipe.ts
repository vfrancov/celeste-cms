import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(status: string): string {
    return (status === 'Active') ? 'Activo' : 'Inactivo';
  }
}
