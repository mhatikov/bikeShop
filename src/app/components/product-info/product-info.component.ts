import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faMagic, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs'; 
import { ProductInfoInterface } from 'src/app/interfaces/productPage.interface';
import { ProductPageItem } from 'src/app/models/product-list.item';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit, OnDestroy {

  constructor(
    private productListService: ProductListService, 
    private activateRoute: ActivatedRoute,
  ) { }

  _productId: string = String(this.activateRoute.snapshot.params['id']);

  product: ProductInfoInterface;
  streamProduct: Subscription;

  iconCart = faShoppingCart;
  iconWishList = faMagic;

  charLimitValue: number = 105;
  zoomImg: boolean = false;

  zoomImgListener(ev: any): void{
    const target = ev.target;
    this.zoomImg = !this.zoomImg;
    if(this.zoomImg === true){
      target.innerText = '- zoom';
    }else{
      target.innerText = '+ zoom';
    }
  }

  readMoreListener(ev: any): void{
    if(this.charLimitValue === 0){
      this.charLimitValue = 105;
    }else{
      this.charLimitValue = 0
    }
  }

  ngOnInit(): void {
    this.streamProduct = this.productListService.getDataItemFromBaseById$(this._productId).subscribe(result => this.product = new ProductPageItem(result));
  }

  ngOnDestroy(): void {
    this.streamProduct.unsubscribe();
  }

}