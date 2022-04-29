import { Component, OnInit } from "@angular/core";
import { Strings } from "@core/constants/strings";
import { NoveltiesGraphicData } from "@domain/dashboard/dashboard.dto";

@Component({
  selector: 'graphics-component',
  templateUrl: './graphics.component.html'
})
export class GraphicsPageComponent implements OnInit {
  public options: any;
  public data: any;
  public optionsTwo: any;
  public dataTwo: any;

  ngOnInit(): void {
    this.showDashboardGraphic([
      {
        label: 'Rayones',
        value: 8
      },
      {
        label: 'Golpes',
        value: 20
      },
      {
        label: 'Objetos Olvidados',
        value: 13
      }
    ]);

    this.showDashboardGraphicTwo([
      {
        label: 'Enero',
        value: 8
      },
      {
        label: 'Febrero',
        value: 20
      },
      {
        label: 'Marzo',
        value: 13
      },
      {
        label: 'Abril',
        value: 13
      },
      {
        label: 'Mayo',
        value: 4
      },
      {
        label: 'Junio',
        value: 19
      },
      {
        label: 'Julio',
        value: 10
      },
      {
        label: 'Agosto',
        value: 3
      },
      {
        label: 'Septiembre',
        value: 5
      },
      {
        label: 'Octubre',
        value: 6
      },
      {
        label: 'Noviembre',
        value: 10
      },
      {
        label: 'Diciembre',
        value: 25
      }
    ]);
  }

  showDashboardGraphic(graphicData: Array<NoveltiesGraphicData>): void {
    this.options = {
      chart: {
        type: Strings.graphicBarChart,
        height: 500,
        margin: {
          top: 10,
          right: 20,
          bottom: 50,
          left: 50
        },
        x: function (graphicValue) { return graphicValue.label; },
        y: function (graphicValue) { return graphicValue.value; },
        showValues: true,
        valueFormat: function (graphicValue) {
          return graphicValue;
        },
        duration: 500
      }
    }

    this.data = [
      {
        key: Strings.graphicTitle,
        values: graphicData
      }
    ];
  }

  showDashboardGraphicTwo(graphicData: Array<NoveltiesGraphicData>): void {
    this.optionsTwo = {
      chart: {
        type: Strings.graphicBarChart,
        height: 500,
        margin: {
          top: 10,
          right: 20,
          bottom: 50,
          left: 50
        },
        x: function (graphicValue) { return graphicValue.label; },
        y: function (graphicValue) { return graphicValue.value; },
        showValues: true,
        valueFormat: function (graphicValue) {
          return graphicValue;
        },
        duration: 500
      }
    }

    this.dataTwo = [
      {
        key: Strings.graphicTitle,
        values: graphicData
      }
    ];
  }
}
