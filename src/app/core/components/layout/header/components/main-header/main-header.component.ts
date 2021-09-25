import { Component, Input } from '@angular/core';

import { LoginComponent } from 'src/app/core/components/auth/login/login.component';
import { RegistrationComponent } from 'src/app/core/components/auth/registration/registration.component';
import { OverlayModalComponent } from 'src/app/shared/components/overlay-modal/overlay-modal.component';

import { ModalDataService } from 'src/app/shared/services/modalData.service';



@Component({
  selector: 'main-header',
  template: `
    <ul class="menu list-inline mb-0">
      <li class="list-inline-item" (click)="openLoginModal()">Login</li>
      <li class="list-inline-item" (click)="openRegistrationModal()">Registration</li>

      <ng-template ngFor [ngForOf]="navigationData" let-route>
        <li class="list-inline-item">
            <a [routerLink]="[route.link]">{{route.name}}</a>
        </li> 
      </ng-template>
    </ul>
  `,
  styleUrls: ['../../header.component.css']
})
export class MainHeaderComponent {
  @Input() navigationData;

  constructor(
    private _modalService: ModalDataService
  ) { }

  openLoginModal(): void {
    this._modalService.showModalComponent(OverlayModalComponent, LoginComponent);
  }

  openRegistrationModal(): void {
    this._modalService.showModalComponent(OverlayModalComponent, RegistrationComponent);
  }
}