import { Component, Input } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'user-header',
  template: `
    <ul>
      <li class="list-inline-item" (click)="logout()">Logout</li>
      <li class="list-inline-item"><img src="" alt="Avatar" width="50px"/></li>

      <ng-template ngFor [ngForOf]="navigationData" let-route>
        <li class="list-inline-item">
            <a [routerLink]="[route.link]">{{route.name}}</a>
        </li> 
      </ng-template>
    </ul>
  `,
  styleUrls: ['../../header.component.css']
})
export class UserHeaderComponent {
  @Input() navigationData;

  constructor(
    public authService: AuthService
  ) { }

  logout(): void {
    this.authService.logout();
  }
}
