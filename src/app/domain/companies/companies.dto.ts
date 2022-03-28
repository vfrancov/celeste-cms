
export interface CompaniesDto {
  id: number,
  name: string
  nit: string
  email: string
  address: string
  phoneNumber: string
  statusId: number,
  statusName: number
}

export type CreateCompanie = Omit<CompaniesDto, 'id' | 'statusId' | 'statusName'>;

export type UpdateCompanie = Omit<CompaniesDto, 'phoneNumber' | 'statusId' | 'statusName'>;

export type GetCompanie = Omit<CompaniesDto, 'statusId'>;

export type DeleteCompanie = Pick<CompaniesDto, 'id'>;
