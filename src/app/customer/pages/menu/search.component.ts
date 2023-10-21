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
      title: 'Lectoescritura y escucha ',
      imageUrl: 'https://ccfprosario.com.ar/wp-content/uploads/10-divertidas-actividades-de-lectoescritura-para-primer-grado.jpg',
      description: 'Description for Card 1'
    },
    {
      title: 'Percepción de imagen ',
      imageUrl: 'https://uploads-ssl.webflow.com/62492b6e92323519d2c3061f/62b363e7bf08505b641ace9f_IMG-20211012-WA0034.jpg',
      description: 'Description for Card 2'
    },
    {
      title: 'Razonamiento lógico ',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Card 3'
    },
    {
      title: 'Memoria ',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Card 4'
    }
  ];

  selectedCard: number | null = null;

  selectCard(cardNumber: number) {
    this.selectedCard = cardNumber;
    console.log('cardNumber->',cardNumber)

    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
      this.router.navigateByUrl('search/detail');
    }, 2000);

  }

}
