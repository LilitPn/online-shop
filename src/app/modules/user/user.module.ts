import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageComponent } from './user-page/user-page.component';
import { UserRoutingModule } from './user-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class UserModule { }
