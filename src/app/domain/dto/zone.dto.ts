export interface ZoneDto {
  id: number,
  name: string,
  statusName: string,
  companyId: number
}

export type IZoneFields = Required<ZoneDto>;

export type GetZone = Omit<ZoneDto, 'companyId'>;

export type CreateZone = Pick<ZoneDto, 'name'>;

export type UpdateZone = Pick<ZoneDto, 'name' | 'id'>;
