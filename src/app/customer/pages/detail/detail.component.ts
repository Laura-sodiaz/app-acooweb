import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  public option : any;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService){
  
  }
   
  public categoria : any;

  ngOnInit(){
    this.categoria = sessionStorage.getItem('catDesc');
    this.option = sessionStorage.getItem('catNum');
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    },2500)
  }

  return(){
    this.router.navigateByUrl('search');
  }

}
