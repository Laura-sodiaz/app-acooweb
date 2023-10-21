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
      const user = (this.form.value.usuario).toUpperCase();
      const pass = (this.form.value.password).toUpperCase( );

      if(pass==='ACOOWEB'){
        console.log('Contraseña Correcta')

        if(user==="LAURA"){
           console.log('Acceso correcto:','LAURA');
           sessionStorage.setItem('user', user);
        }else if(user==="LILIANA"){
           console.log('Acceso correcto:','LILIANA');
           sessionStorage.setItem('user', user);
        }else if(user==="ESTEBAN"){
           console.log('Acceso correcto:','ESTEBAN');
           sessionStorage.setItem('user', user);
        }else if(user==="ELENA"){
           console.log('Acceso correcto:','ELENA');
           sessionStorage.setItem('user', user);
        }else{
          console.log('Usuario Incorrecto')
        }

      }else{
        console.log('Contraseña inválida')
      }

      this.router.navigateByUrl('search');
    }, 1000);

  }

}
