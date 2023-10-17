import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {


  constructor(
    private router: Router,
    private spinner: NgxSpinnerService){
  
  }

  ingresar() : void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
      this.router.navigateByUrl('auth');
    }, 2000);

  }

}
