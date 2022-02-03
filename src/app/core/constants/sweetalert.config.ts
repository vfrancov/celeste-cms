import { SweetAlertOptions } from "sweetalert2";


export const userWarning: SweetAlertOptions = {
  title: 'Advertencia',
  text: "¿Deseas eliminar el usuario?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
}

export const userChangePasswordSuccess: SweetAlertOptions = {
  title: 'Modificación Exitosa',
  text: "Has cambiado la contraseña!",
  icon: 'success',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
}

export const userCreatedUser: SweetAlertOptions = {
  title: 'Registro Exitoso',
  text: "Usuario creado exitosamente",
  icon: 'success',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
}

export const userEdit: SweetAlertOptions = {
  title: 'Edición Exitosa',
  text: "Usuario actualizado exitosamente",
  icon: 'success',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
}

export const companieWarning: SweetAlertOptions = {
  title: 'Advertencia',
  text: "¿Deseas eliminar la empresa?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
}

export const companieCreated: SweetAlertOptions = {
  title: 'Registro Exitoso',
  text: "Empresa creada exitosamente",
  icon: 'success',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
}

export const companieUpdated: SweetAlertOptions = {
  title: 'Actualización Exitosa',
  text: "Empresa actualizada exitosamente",
  icon: 'success',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
}

export const companieDeleted: SweetAlertOptions = {
  title: 'Eliminacion Exitosa',
  text: "Empresa eliminada exitosamente",
  icon: 'success',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
}
