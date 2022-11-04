import { Component, Inject, OnInit } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { dataTableHeadBillings } from "@core/constants/table.headers";
import { BillingDto, InvoicesResponse } from "@domain/billing/billing.dto";
import { IBillingRepository } from "@domain/billing/billing.repository";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { UserPermissions } from "@domain/shared/menu.dto";

@Component({
  selector: 'billing-component',
  templateUrl: './billing.component.html'
})
export class BillingPageComponent implements OnInit {

  public dataTableHead: string[] = dataTableHeadBillings;
  public billingData: BillingDto[] = [];
  public invoiceDetails: InvoicesResponse;
  public userPermissions: UserPermissions;
  public requestBody: IFilterRequestBody = new RequestBody;
  public billing: BillingDto;
  public isDescOrAsc: boolean = false;
  public amountOfPages: number;
  public amountOfRows: number;

  constructor(@Inject(RepositoryProvider.billingProvider) private _billingService: IBillingRepository) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this._billingService.readAll(this.requestBody).subscribe(
      response => this.billingData = response.body.list
    );
  }

  showInvoiceDetailInModal(id: number): void {
    this._billingService.getBillingById(id).subscribe(
      response => this.invoiceDetails = response.body
    );
  }

  sort(fieldToSort: string): void {
    this.isDescOrAsc = !this.isDescOrAsc;
    this.requestBody.sort[0].field = fieldToSort;
    this.requestBody.sort[0].dir = (this.isDescOrAsc) ? 'desc' : 'asc';

    this.readAll();
  }

  applyFilter(filter: any): void {
    this.requestBody.filter = filter.filter;
    this.readAll();
  }

  restoreFilter(event: any): void {
    this.requestBody = new RequestBody;
    this.readAll();
  }

  selectedPage(page: number): void {
    this.requestBody.offset = page;
    this.readAll();
  }
}
