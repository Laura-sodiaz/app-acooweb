import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SharedRoutingModule } from './shared-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';

// Available options
interface NgxSpinnerConfig {
  type?: string;
}

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  exports: [
    LoadingComponent
  ]
})
export class SharedModule { }
