/**
 * Head Users
 */
// 'Nombres', 'Apellidos', 'Telefono', 'Estado', 'Rol', 'Usuario', 'Empresas', 'Acciones'
export const dataTableHeadUsers: any[] = [
  {
    title : 'Nombres',
    field : 'firstName',
    isSort: true
  },
  {
    title : 'Apellidos',
    field: 'lastName',
    isSort: true
  },
  {
    title: 'Telefono',
    field: 'phoneNumber',
    isSort: true
  },
  {
    title: 'Estado',
    field: 'phoneNumber',
    isSort: true
  },
  {
    title: 'Rol',
    field: 'email',
    isSort: true
  },
  {
    title: 'Usuario',
    field: 'statusName',
    isSort: true
  },
  {
    title: 'Empresa',
    field: 'companyName',
    isSort: false
  },
  {
    title: 'Acciones',
    field: 'action',
    isSort: false
  }
];

export const dataTableHeadCompanies: any[] = [
  {
    title : 'Nombre Empresa',
    field : 'name',
    isSort: true
  },
  {
    title : 'NIT',
    field: 'nit',
    isSort: true
  },
  {
    title: 'Direccion',
    field: 'address',
    isSort: true
  },
  {
    title: 'Telefono',
    field: 'phoneNumber',
    isSort: true
  },
  {
    title: 'Correo',
    field: 'email',
    isSort: true
  },
  {
    title: 'Estado',
    field: 'statusName',
    isSort: true
  },
  {
    title: 'Acciones',
    field: 'action',
    isSort: false
  }
];

// 'Nombre Empresa', 'NIT', 'Direccion', 'Telefono', 'Correo', 'Estado', 'Acciones'
// 'Nombre Zona', 'Nombre Empresa', 'Estado Zona', 'Acciones'

export const dataTableHeadZones: any[] = [
  {
    title : 'Nombre Zona',
    field : 'name',
    isSort: true
  },
  {
    title : 'Nombre Empresa',
    field: 'companyName',
    isSort: true
  },
  {
    title: 'Estado Zona',
    field: 'statusName',
    isSort: true
  },
  {
    title: 'Acciones',
    field: 'action',
    isSort: false
  }
];

export const dataTableHeadFloors: string[] = ['Nombre Zona', 'Nombre Piso', 'Estado', 'Acciones'];

export const dataTableHeadSubNovelties: string[] = ['Nombre', 'Estado', 'Asociar'];
