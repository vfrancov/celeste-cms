export interface FloorDto {
  id: number,
  name: string,
  statusId: string,
  statusName: string,
  appZoneId: number,
  appZoneName: string
}

export type CreateFloor = Pick<FloorDto, 'name' | 'appZoneId'>;

export type UpdateFloor = Pick<FloorDto, 'id' | 'name'>;

export type GetFloor = Pick<FloorDto, 'id'>;

export type DeleteFloor = Pick<FloorDto, 'id'>;
