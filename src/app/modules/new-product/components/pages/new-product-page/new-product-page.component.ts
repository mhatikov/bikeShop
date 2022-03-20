import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NewProduct } from 'src/app/interfaces/newProduct.interface';
import { MultiSelectObject } from 'src/app/interfaces/multi-select.interface';
import { UploadedImage } from 'src/app/models/uploadImage';
import { ProductListService } from 'src/app/services/product-list.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { color, createDataItem, size } from './newProductPage.constants';

@Component({
  selector: 'app-new-product-page',
  templateUrl: './new-product-page.component.html',
  styleUrls: ['./new-product-page.component.scss']
})
export class NewProductPageComponent implements OnInit, OnDestroy {

  constructor(
    private _productListService: ProductListService, 
    private _router: Router,
  ) { }

  fileUploaded: UploadedImage[] = [];

  files: File[] = [];

  subscriptionUpload: Subscription;

  newProductObj: NewProduct;

  sizeProduct: MultiSelectObject[];

  colorProduct: MultiSelectObject[];

  @ViewChild('imageInput') imageInput: ElementRef;

  uploadFile(ev: any): void{
    const files = ev.target.files;
    for(let file of files){
      let reader = new FileReader();
      const fileObj = new UploadedImage();
      fileObj.imageSize = file.size;
      reader.readAsDataURL(file);
      reader.onload = () =>{
        fileObj.imageUrl = reader.result;
        this.fileUploaded.push(fileObj);
      }
    }
    for(let file of files){
      this.files.push(file);
    }
  }

  clearUploadedFiles(ev: any): void{
    const input = this.imageInput.nativeElement;
    this.fileUploaded = [];
    this.files = [];
    input.value = '';
    if(!/safari/i.test(navigator.userAgent)){
      input.type = '';
      input.type = 'file';
    }

  }

  submitProduct(){
    if(!(this.newProductObj.name || this.newProductObj.shop || this.newProductObj.description)){
      alert('data not entry!')
      return;
    }
    this.subscriptionUpload = this._productListService.uploadProductToBase$(createDataItem(this.newProductObj), this.files)
    .subscribe((res) => {
      console.log(`data upload to base, id:${res}`);
      this._router.navigate(['']);
    });
  }

  ngOnInit(): void {
    this.sizeProduct = size;
    this.colorProduct = color;
    this.newProductObj = {
      name: '',
      shop: '',
      description: '',
      size: [],
      color: [],
      images: [],
      price: 0,
    };
  }

  ngOnDestroy(): void {
    if(this.subscriptionUpload) this.subscriptionUpload.unsubscribe();
  }
}