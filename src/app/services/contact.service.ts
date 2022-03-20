import { Injectable } from '@angular/core';
import { AddressShop } from '../models/addres-shop';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { 
    this.addresses = [
      new AddressShop('Zarubina', '167', 'Russia', 'Saratov', 4100040)
    ]
  }
  addresses:AddressShop[];
}
