import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { UnAuthGuard } from './core/guards/unAuth.guard';




const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/web_market/home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'contuct',
    loadChildren: () => import('./modules/web_market/contuct/contuct.module').then(x => x.ContuctModule),
    canActivate: [UnAuthGuard]
  },
  {
    path: 'section',
    loadChildren: () => import('./modules/web_market/section/section.module').then(x => x.SectionModule),
    canActivate: [UnAuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(x => x.UserModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UnAuthGuard, AuthGuard]
})
export class AppRoutingModule { }