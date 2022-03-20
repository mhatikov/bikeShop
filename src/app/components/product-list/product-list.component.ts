import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductItem } from 'src/app/models/product-list.item';
import { ProductListService } from 'src/app/services/product-list.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  

  constructor(
    private productListService:ProductListService
  ) {
  }

  items: Observable<ProductItem[]>

  ngOnInit(): void {
    this.items = this.productListService.getDataFromBase$().pipe(
      map(element => {
        const newArray = element.map((dataItem) => new ProductItem(dataItem));
        return newArray;
      }),
    )
  }

  ngOnDestroy(): void {
  }
}
