import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SectionComponent } from './components/section/section.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { SectionRoutingModule } from './section-routing.module';



@NgModule({
  declarations: [
    SectionComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    SectionRoutingModule
  ]
})
export class SectionModule { }
