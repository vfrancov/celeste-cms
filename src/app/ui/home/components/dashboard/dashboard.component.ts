import { Component, Inject, OnInit } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { DashboardDTO } from "@domain/dashboard/dashboard.dto";
import { IDashboardRespository } from "@domain/dashboard/dashboard.repository";

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public dashboardData: DashboardDTO;

  constructor(@Inject(RepositoryProvider.dashboardProvider) private dashboardService: IDashboardRespository) { }

  ngOnInit(): void {
    this.fetchDashboardResume();
  }

  fetchDashboardResume(): void {
    this.dashboardService.getDashoardResume().subscribe(response => this.dashboardData = response.body);
  }
}
