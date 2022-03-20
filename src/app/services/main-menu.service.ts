import { Injectable } from '@angular/core';
import { LinkMainMenu } from '../models/link';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor() { 
    
  }

  links:LinkMainMenu[] = [
    new LinkMainMenu('Home', ''),
    new LinkMainMenu('About', 'about'),
    new LinkMainMenu('Order', 'order'),
    new LinkMainMenu('New-product', 'newProduct')
  ];
}
