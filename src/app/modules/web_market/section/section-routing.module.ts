import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { SectionComponent } from './components/section/section.component';


const routes: Routes = [
    { path: ':{section}', component: SectionComponent },
    { path: ':{product}', component: ProductDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule]
})
export class SectionRoutingModule { }