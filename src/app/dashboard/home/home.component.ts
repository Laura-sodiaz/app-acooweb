import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public user : any;

  constructor(
    private router: Router){
  
  }

  ngOnInit(){
    this.user = sessionStorage.getItem('user');
  }

  goToDetail(cat: any){

    if(cat===0){
      sessionStorage.setItem('catNum', '0');
      sessionStorage.setItem('catDesc', 'Lectoescritura y Escucha');
      console.log('cardNumber->',cat)
   }else if(cat===1){
      sessionStorage.setItem('catNum', '1');
      sessionStorage.setItem('catDesc', 'Percepción de Imagen ');
      console.log('cardNumber->',cat)
   }else if(cat===2){
      sessionStorage.setItem('catNum', '2');
      sessionStorage.setItem('catDesc', 'Razonamiento Lógico ');
      console.log('cardNumber->',cat)
   }else if(cat===3){
      sessionStorage.setItem('catNum', '3');
      sessionStorage.setItem('catDesc', 'Memoria');
      console.log('cardNumber->',cat)
   }

   console.log('Llamado a detail');
   this.router.navigateByUrl('search/detail');

  }

}
