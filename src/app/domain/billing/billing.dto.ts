export interface InvoicesResponse {
  data: BillingDto,
  services: Array<Services>
}

export interface BillingDto {
  id: number,
  identify: string,
  email: string,
  dateInit: string,
  dateFinish: string,
  totalValue: number,
  appFloorId: number,
  appFloorName: string,
  appZoneId: number,
  appZoneName: string,
  companyId: number,
  companyName: string
}

interface Services {
  id: number,
  tariffsConcept: string
}
