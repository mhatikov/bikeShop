import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { concat, from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {

  constructor( private _storage: Storage) { }

  uploadImageProductById$(productId: string, nameFile: string, imageFile: File): Observable<string>{
    const imageRef = ref(this._storage, `products/${productId}/${nameFile}`)
    return from(uploadBytes(imageRef, imageFile)).pipe(
      switchMap(result => getDownloadURL(result.ref))
    );
  }

  uploadImagesProductsById$(productId: string, imageFiles: File[]): Observable<string>{
    const observables: Observable<string>[] = [];
    imageFiles.forEach((element, index)=>{
      observables.push(this.uploadImageProductById$(productId, String(index), element));
    })
    return concat(...observables);
  }

  uploadImageProduct$(nameFile: string, imageFile: File): Observable<string>{
    const imageRef = ref(this._storage, `products/${nameFile}`)
    return from(uploadBytes(imageRef, imageFile)).pipe(
      switchMap(result => getDownloadURL(result.ref))
    );
  }

  uploadImagesProducts$(imageFiles: File[]): Observable<string> {
    const observables: Observable<string>[] = [];
    imageFiles.forEach((element)=>{
      observables.push(this.uploadImageProduct$(element.name, element));
    })
    return concat(...observables);
  }
}
