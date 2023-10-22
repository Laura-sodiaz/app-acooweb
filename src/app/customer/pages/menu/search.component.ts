import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService){
  
  }

  cards = [
    {
      title: 'Lectoescritura y Escucha ',
      imageUrl: './assets/img/cat1.jpeg',
      description: 'Description for Card 1'
    },
    {
      title: 'Percepción de Imagen ',
      imageUrl: './assets/img/cat2.jpeg',
      description: 'Description for Card 2'
    },
    {
      title: 'Razonamiento Lógico ',
      imageUrl: './assets/img/cat3.jpeg',
      description: 'Description for Card 3'
    },
    {
      title: 'Memoria ',
      imageUrl: './assets/img/cat4.jpeg',
      description: 'Description for Card 4'
    }
  ];

  selectedCard: number | null = null;

  selectCard(cardNumber: number) {
    this.selectedCard = cardNumber;

    if(cardNumber===0){
       sessionStorage.setItem('catNum', '0');
       sessionStorage.setItem('catDesc', this.cards[0].title);
       console.log('cardNumber->',cardNumber)
    }else if(cardNumber===1){
       sessionStorage.setItem('catNum', '1');
       sessionStorage.setItem('catDesc', this.cards[1].title);
       console.log('cardNumber->',cardNumber)
    }else if(cardNumber===2){
       sessionStorage.setItem('catNum', '2');
       sessionStorage.setItem('catDesc', this.cards[2].title);
       console.log('cardNumber->',cardNumber)
    }else if(cardNumber===3){
       sessionStorage.setItem('catNum', '3');
       sessionStorage.setItem('catDesc', this.cards[3].title);
       console.log('cardNumber->',cardNumber)
    }

    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
      this.router.navigateByUrl('search/detail');
    }, 5);

  }

}
