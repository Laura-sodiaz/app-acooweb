import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 4, color: 'lightgreen'},
  ];

}
