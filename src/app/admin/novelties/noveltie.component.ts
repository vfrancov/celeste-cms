import { Component } from "@angular/core";

@Component({
  selector: 'noveltie-component',
  templateUrl: './noveltie.component.html'
})
export class NoveltiePageComponent {
  novelties: any[] = [
    {
      title: 'Novedad',
      image: './assets/img/logo-celeste.png'
    },
    {
      title: 'Novedad',
      image: './assets/img/logo-celeste.png'
    },
    {
      title: 'Novedad',
      image: './assets/img/logo-celeste.png'
    },
    {
      title: 'Novedad',
      image: './assets/img/logo-celeste.png'
    },
    {
      title: 'Novedad',
      image: './assets/img/logo-celeste.png'
    },
    {
      title: 'Novedad',
      image: './assets/img/logo-celeste.png'
    }
  ];
}
