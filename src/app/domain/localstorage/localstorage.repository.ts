import { UserDto } from "@domain/user/user.dto"

export interface ILocalStorageRepository {
  saveItem(key: string, data: any): void
  getItem(key: string): any
  removeItem(): void
  getPermissions(): UserDto
}
