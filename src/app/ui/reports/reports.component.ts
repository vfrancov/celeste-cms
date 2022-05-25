import { Component, OnInit } from "@angular/core";
import { dataTableHeadReports } from "@core/constants/table.headers";
import { ReportServices } from "@core/services/reports.service";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";

@Component({
  selector: 'reports-component',
  templateUrl: './reports.component.html'
})
export class ReportsPageComponent implements OnInit {

  public dataTableHead: any[] = dataTableHeadReports;
  private requestBody: IFilterRequestBody = new RequestBody;
  reportsData: any[] = [];
  public isDescOrAsc: boolean = true;
  public amountOfPages: number;
  public amountOfRows: number;

  constructor(private _reports: ReportServices) { }

  ngOnInit(): void {
    this.fetchDataReport();
  }

  fetchDataReport(): void {
    this._reports.getResume(this.requestBody).subscribe(response => {
      this.reportsData = response.body.list;
      this.amountOfPages = response.body.pages;
      this.amountOfRows = response.body.records;
    });
  }

  sort(fieldToSort: string): void {
    this.isDescOrAsc = !this.isDescOrAsc;
    this.requestBody.sort[0].field = fieldToSort;
    this.requestBody.sort[0].dir = (this.isDescOrAsc) ? 'desc' : 'asc';

    this.fetchDataReport();
  }

  applyFilter(filter: any): void {
    this.requestBody.filter = filter.filter;
    this.fetchDataReport();
  }

  restoreFilter(event: any): void {
    this.requestBody = new RequestBody;
    this.fetchDataReport();
  }

  selectedPage(page: number): void {
    this.requestBody.offset = page;
    this.fetchDataReport();
  }
}
