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
      title: 'Categoria 1',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Card 1'
    },
    {
      title: 'Categoria 2',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Card 2'
    },
    {
      title: 'Categoria 3',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Card 3'
    },
    {
      title: 'Categoria 4',
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
