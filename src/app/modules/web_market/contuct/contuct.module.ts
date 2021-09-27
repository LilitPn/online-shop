import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContuctRoutingModule } from './contuct-routing.module';

import { ContactService } from './services/contact.service';

import { ContuctComponent } from './contuct/contuct.component';




@NgModule({
  declarations: [
    ContuctComponent
  ],
  imports: [
    CommonModule,
    ContuctRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    ContactService
  ]
})
export class ContuctModule { }
