import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public user : any;

  ngOnInit(){
    this.user = sessionStorage.getItem('user');
  }

}
