import { Injectable } from '@angular/core';
import { find, from, last, map, Observable, switchMap } from 'rxjs';
import { DataItem } from '../models/product-list.item';
import { FireStoreStorageService } from './fire-store-storage.service';
import { ImageStorageService } from './image-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private _fireStoreService: FireStoreStorageService, private _imageStorageService: ImageStorageService) { 
  }

  getDataFromBase$(): Observable<DataItem[]>{
    return this._fireStoreService.getProducts$().pipe(
      map(res => res.sort((a,b) =>{
        if(a.main || a.discount > b.discount) return -1;
        if(a.discount < b.discount) return 1;
        return 0;
      }))
    );
  }

  uploadProductToBase$(dataItem: DataItem, files: File[]): Observable<string>{
    return this._imageStorageService.uploadImagesProducts$(files).pipe(
      map(res => {
        dataItem.imgUrl.push(res);
        return dataItem;
      }),
      last(),
      switchMap(res => this._fireStoreService.addProduct$(res)),
      map(res => res.id)
    )
  }

  getProductElementsFromBase$(): Observable<DataItem>{
    return this.getDataFromBase$().pipe(
      switchMap(res => from(res))
    );
  }

  getDataItemFromBaseById$(_id: string): Observable<DataItem> {
    return this._fireStoreService.getProductById$(_id);
  }

  getDataByNameFromBase$(_name: string): Observable<DataItem | undefined>{
    return this.getProductElementsFromBase$().pipe(
      find(res => res.name.trim().toLowerCase() === _name.trim().toLowerCase()),
    );
  }
}