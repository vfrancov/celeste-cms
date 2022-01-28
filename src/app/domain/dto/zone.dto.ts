export interface ZoneDto {
  id: number,
  name: string,
  companyId: number
}

export type IZoneFields = Required<ZoneDto>;

export type GetZone = Omit<ZoneDto, 'companyId'>;
