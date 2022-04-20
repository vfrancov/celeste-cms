import { Component, Inject, OnInit } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { Strings } from "@core/constants/strings";
import { DashboardDTO, NoveltiesGraphicData } from "@domain/dashboard/dashboard.dto";
import { IDashboardRespository } from "@domain/dashboard/dashboard.repository";
declare let d3: any;

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public dashboardData: DashboardDTO;
  public graphicData: Array<NoveltiesGraphicData>;
  public options: any;
  public data: any;

  constructor(@Inject(RepositoryProvider.dashboardProvider) private dashboardService: IDashboardRespository) { }

  ngOnInit(): void {
    this.fetchDashboardResume();
  }

  fetchDashboardResume(): void {
    this.dashboardService.getDashoardResume().subscribe(response => {
      this.dashboardData = response.body;
      this.showDashboardGraphic(response.body.dashboard.graphic);
    });
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
}
