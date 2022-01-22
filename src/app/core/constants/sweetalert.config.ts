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
