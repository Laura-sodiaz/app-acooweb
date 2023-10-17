import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LandingPageRoutingModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ]
})
export class LandingPageModule { }
