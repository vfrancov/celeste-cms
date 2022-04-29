export enum Permissions {
  companies,
  zones,
  novelties,
  rate,
  parkings,
  users,
  devices,
  floors,
  graphics,
  reports,
  configuration
}

export const permissions: Array<MenuPermissions> = [
  {
    name: 'Crear',
    status: false,
    alias: 'create'
  },
  {
    name: 'Leer',
    status: false,
    alias: 'read'
  },
  {
    name: 'Actualizar',
    status: false,
    alias: 'update'
  },
  {
    name: 'Eliminar',
    status: false,
    alias: 'delete'
  }
]

export interface MenuPermissions {
  name: string,
  status: boolean,
  alias: string
}
