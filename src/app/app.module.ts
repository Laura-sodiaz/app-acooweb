import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modules
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
