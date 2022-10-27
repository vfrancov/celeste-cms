export interface DeviceDto {
  id: number,
  companyName: string,
  companyId: number,
  statusName: string,
  statusId: number,
  name: string,
  code: string,
  expireLicenseDate: string
}

export type CreateDevice = Omit<DeviceDto, 'id'>;

export type GetDevice = Required<DeviceDto>;

export type UpdateDevice = Required<DeviceDto>;

export type DeleteDevice = Pick<DeviceDto, 'id'>;


