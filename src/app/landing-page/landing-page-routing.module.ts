import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: '**',
        redirectTo: 'landing'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
