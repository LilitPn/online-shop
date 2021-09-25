import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';



@Injectable()
export class SwalAlertService {
    static confirmAlert(
        swalIcon: string,
        swalTitle: string,
        swalConfirmBtnText: string,
        swalDenyBtnText: string
    ): void {
        return Swal.fire({
            icon: swalIcon,
            title: swalTitle,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: swalConfirmBtnText,
            denyButtonText: swalDenyBtnText,

        })
    }

    static alert(
        swalIcon: string,
        swalTitle: string,
        swalText: string
    ): void {
        Swal.fire({
            icon: swalIcon,
            title: swalTitle,
            text: swalText
        })
    }
}