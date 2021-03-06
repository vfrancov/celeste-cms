import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Navigation } from "@core/constants/navigataion.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { Strings } from "@core/constants/strings";
import { messageSessionDestroy } from "@core/constants/sweetalert.config";
import { DashboardData, NoveltiesGraphicData } from "@domain/dashboard/dashboard.dto";
import { IDashboardRespository } from "@domain/dashboard/dashboard.repository";
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  public dashboardData: DashboardData;
  public graphicData: Array<NoveltiesGraphicData>;
  public options: any;
  public data: any;

  constructor(
    @Inject(RepositoryProvider.dashboardProvider) private dashboardService: IDashboardRespository,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.fetchDashboardResume();
  }

  fetchDashboardResume(): void {
    this.dashboardService.getDashoardResume().subscribe(response => {
      this.dashboardData = response.body;
      this.showDashboardGraphic(response.body);
    }, (error: HttpErrorResponse) => swal.fire(messageSessionDestroy).then((action: SweetAlertResult) => {
      this._router.navigate([Navigation.login]);
    }));
  }

  showDashboardGraphic(graphicData: DashboardData): void {
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
        values: graphicData.graphic
      }
    ];
  }
}
