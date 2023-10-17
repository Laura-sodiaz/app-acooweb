import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule { }
