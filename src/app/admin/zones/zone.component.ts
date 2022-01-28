import { Component } from "@angular/core";
import { ZoneDto } from "@domain/dto/zone.dto";

@Component({
    selector: 'zone-component',
    templateUrl: './zone.component.html'
})
export class ZonePageComponent {
  dataTableHead: string[] = ['Nombre Zona', 'Estado Zona', 'Acciones'];
  zoneData: ZoneDto[] = [];
}
