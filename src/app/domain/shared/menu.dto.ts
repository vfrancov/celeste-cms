export interface MenuUserDto {
    menuId: number,
    actionMenu: UserPermissions,
    menuName: string,
    route: string,
    icon: string
}

export interface UserPermissions {
    create: boolean,
    read: boolean,
    update: boolean,
    delete: boolean,
    canActivate: boolean
}
