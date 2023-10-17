import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: ()=> import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'search',
    loadChildren: ()=> import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'error',
    loadChildren: ()=> import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
]

@NgModule({
 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule { }
