import { Component, OnInit } from "@angular/core";
import { ReportServices } from "@core/services/reports.service";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";

@Component({
  selector: 'reports-component',
  templateUrl: './reports.component.html'
})
export class ReportsPageComponent implements OnInit {

  private requestBody: IFilterRequestBody = new RequestBody;
  reportsData: any[] = [];

  constructor(private _reports: ReportServices) { }

  ngOnInit(): void {
    this.fetchDataReport();
  }

  fetchDataReport(): void {
    this._reports.getResume(this.requestBody).subscribe(response => this.reportsData = response.body.list);
  }
}
