import { Injectable } from '@angular/core';
import { CellsSlide } from '../models/cells-slide';

@Injectable({
  providedIn: 'root'
})
export class CellsSliderService {

  constructor() { 
    this.slides = [
      new CellsSlide('url(/assets/bike1.jpeg)', 'Merida', 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'red'),
      new CellsSlide('url(/assets/bike2.jpg)', 'Stels', 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'blue'),
      new CellsSlide('url(/assets/bike3.jpg)', 'Stern', 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'green'),
    ]
  }

  slides:CellsSlide[] = [];
}
