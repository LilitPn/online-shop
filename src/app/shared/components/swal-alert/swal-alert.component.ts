import { Component } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';



@Component({
  selector: 'app-swal-alert',
  templateUrl: './swal-alert.component.html',
  styleUrls: ['./swal-alert.component.css']
})
export class SwalAlertComponent {
  static confirmAlert(
    swalTitle: string,
    swalConfirmBtnText: string,
    swalDenyBtnText: string
  ) {
    Swal.fire({
      title: swalTitle,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: swalConfirmBtnText,
      denyButtonText: swalDenyBtnText,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
