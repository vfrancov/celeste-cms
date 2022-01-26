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

export const companieWarning: SweetAlertOptions = {
  title: 'Advertencia',
  text: "¿Deseas eliminar la empresa?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
}
