/**
 * Head Users
 */
// 'Nombres', 'Apellidos', 'Telefono', 'Estado', 'Rol', 'Usuario', 'Empresas', 'Acciones'
export const dataTableHeadUsers: any[] = [
  {
    title: 'Nombres',
    field: 'firstName',
    isSort: true
  },
  {
    title: 'Apellidos',
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
    isSort: true
  },
  {
    title: 'Acciones',
    field: 'action',
    isSort: false
  }
];

export const dataTableHeadCompanies: any[] = [
  {
    title: 'Nombre Empresa',
    field: 'name',
    isSort: true
  },
  {
    title: 'NIT',
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
    title: 'Nombre Zona',
    field: 'name',
    isSort: true
  },
  {
    title: 'Nombre Empresa',
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

export const dataTableHeadRates: any = [
  {
    title: 'Concepto',
    field: 'concept',
    isSort: true
  },
  {
    title: 'Valor',
    field: 'value',
    isSort: true
  },
  {
    title: 'Acciones',
    field: 'action',
    isSort: false
  }
];

export const dataTableHeadDevices: any = [
  {
    title: 'Empresa',
    field: 'companyName',
    isSort: true
  },
  {
    title: 'Nombre Dispositivo',
    field: 'deviceName',
    isSort: true
  },
  {
    title: 'Código Dispositivo',
    field: 'codeDevice',
    isSort: true
  },
  {
    title: 'Fecha Expiración',
    field: 'expireLicenceDate',
    isSort: true
  },
  {
    title: 'Estado Dispositivo',
    field: 'statusDevice',
    isSort: true
  },
  {
    title: 'Acciones',
    field: 'actions',
    isSort: false
  }
]

//'Nombre Zona', 'Nombre Piso', 'Estado', 'Acciones'

export const dataTableHeadFloors: any[] = [
  {
    title: 'Nombre Zona',
    field: 'appZoneName',
    isSort: true
  },
  {
    title: 'Nombre Piso',
    field: 'name',
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

export const dataTableHeadSubNovelties: string[] = ['Nombre', 'Estado'];
export const dataTableHeadRelated: any[] = [
  {
    title: 'Nombre',
    field: 'name',
    isSort: true
  },
  {
    title: 'Estado',
    field: 'appNoveltysId',
    isSort: false
  },
  {
    title: 'Accion',
    field: 'action',
    isSort: false
  }
];

export const dataTableHeadReports: any[] = [
  {
    title: 'Empresa',
    field: 'companyName',
    isSort: true
  },
  {
    title: 'Identificación',
    field: 'identify',
    isSort: true
  },
  {
    title: 'Novedad',
    field: 'appNoveltyName',
    isSort: true
  },
  {
    title: 'Foto',
    field: 'photo',
    isSort: false
  },
  {
    title: 'Usuario',
    field: 'userName',
    isSort: true
  },
  {
    title: 'Zona',
    field: 'zoneName',
    isSort: true
  },
  {
    title: 'Piso',
    field: 'floorName',
    isSort: true
  },
  {
    title: 'Correo',
    field: 'email',
    isSort: true
  },
  {
    title: 'Celular',
    field: 'cellphone',
    isSort: true
  },
  {
    title: 'Fecha Inicial',
    field: 'dateInitFilter',
    isSort: true,
    isDate: true
  },
  {
    title: 'Fecha Final',
    field: 'dateFinish',
    isSort: true,
    isDate: true
  },
  {
    title: 'Acciones',
    field: 'appZoneName',
    isSort: false
  }
]

export const dataTableHeadConfiguration: any[] = [
  {
    title: 'Usuario',
    field: 'userName',
    isSort: true
  },
  {
    title: 'Rol',
    field: 'roleName',
    isSort: true
  },
  {
    title: 'Permisos',
    field: 'permissions',
    isSort: false
  },
  {
    title: 'Acciones',
    field: 'actions',
    isSort: false
  }
]
