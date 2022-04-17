import { UserPermissions } from "@domain/shared/menu.dto";

export interface IUserPermissionsRepository {
    getPermissions(path: string): UserPermissions
}