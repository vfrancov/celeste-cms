import { MenuUserDto } from "@domain/shared/menu.dto";

export interface UserDto {
  id?: number,
  firstName: string
  lastName: string,
  username?: string,
  password?: string,
  phoneNumber?: string,
  statusName?: string,
  statusId?: number,
  roleId?: number,
  roleNname?: string,
  companyId?: string,
  companyName?: string,
  token?: string,
  rolId: number,
  expirationToken?: string,
  listMenu: Array<MenuUserDto>
}

export type ChangePassword = Pick<UserDto, 'password'>;

