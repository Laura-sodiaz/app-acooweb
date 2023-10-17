import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';

import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { SearchComponent } from './pages/menu/search.component';



@NgModule({
  declarations: [
   
    SearchComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    CustomerRoutingModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ]
})
export class CustomerModule { }
