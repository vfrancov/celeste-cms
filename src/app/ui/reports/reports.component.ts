import { HttpErrorResponse } from "@angular/common/http";
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { dataTableHeadReports } from "@core/constants/table.headers";
import { ReportServices } from "@core/services/reports.service";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import swal from 'sweetalert2';

@Component({
  selector: 'reports-component',
  templateUrl: './reports.component.html'
})
export class ReportsPageComponent implements OnInit {

  @ViewChild('linkReport') linkReport: ElementRef;

  public dataTableHead: any[] = dataTableHeadReports;
  private requestBody: IFilterRequestBody = new RequestBody;
  public reportsData: any[] = [];
  public isDescOrAsc: boolean = true;
  public amountOfPages: number;
  public amountOfRows: number;
  public detailsNoveltie: any;
  public imageModal: string;
  public linkReportDownload: SafeResourceUrl;
  public reportName: string = `Reporte-${new Date().getTime()}.xlsx`;

  constructor(private _reports: ReportServices, private _sanitizer: DomSanitizer, private _renderer: Renderer2) { }

  ngOnInit(): void {
    this.fetchDataReport();
  }

  fetchDataReport(): void {
    this._reports.getResume(this.requestBody).subscribe(response => {
      this.reportsData = response.body.list;
      this.amountOfPages = response.body.pages;
      this.amountOfRows = response.body.records;

      if (response.body.fileName)
        this.downloadFile(response.body.fileName.split('/')[5]);

    }, (error: HttpErrorResponse) => {
      swal.fire('Error Service', `${error.statusText} ${error.url} ${error.name}`, 'warning');
    });
  }

  getDetailsNoveltieById(report: any): void {
    this._reports.getNoveltieById(report.subNoveltiesUser).subscribe(response => this.detailsNoveltie = response.body);
  }

  setImageModal(image: string): void {
    this.imageModal = image;
  }

  downloadFile(fileId: string): void {
    this._reports.downloadReport(fileId).subscribe(response => {
      const blob = new Blob([response.body], { type: response.type.toString() });
      this.linkReportDownload = this._sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
      this.linkReport.nativeElement.click();
    });
  }

  exportExcel(event: any): void {
    this.requestBody.download = true;
    this.fetchDataReport();
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
