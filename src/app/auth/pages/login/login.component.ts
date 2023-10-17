import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService){
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {

  }

  ingresar() : void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.router.navigateByUrl('search');
    }, 1000);

    console.log(this.form.value);
   
  }

}
