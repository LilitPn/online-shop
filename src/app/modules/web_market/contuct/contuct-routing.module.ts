import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContuctComponent } from './contuct/contuct.component';



const routes: Routes = [{ path: '', component: ContuctComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule]
})
export class ContuctRoutingModule { }