export interface DeviceDto {
  id: number,
  companyName: string,
  deviceName: string,
  codeDevice: string,
  expireLicenseDate: string,
  statusDevice: number,
  registerDate: string
}

export type CreateDevice = Omit<DeviceDto, 'id'>;

export type GetDevice = Required<DeviceDto>;

export type UpdateDevice = Required<DeviceDto>;

export type DeleteDevice = Pick<DeviceDto, 'id'>;


