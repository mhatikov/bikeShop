import { Injectable } from '@angular/core';
import { addDoc, collection, CollectionReference, doc, docData, DocumentData, DocumentReference, Firestore, updateDoc } from '@angular/fire/firestore';
import { collectionData } from 'rxfire/firestore';
import { from, Observable } from 'rxjs';
import { DataItem } from '../models/product-list.item';

@Injectable({
  providedIn: 'root'
})
export class FireStoreStorageService {

  constructor(private _fireStore: Firestore) {

  }

  getProducts$(): Observable<DataItem[]> {
    const productsCollectionRef = collection(this._fireStore, 'products');
    return collectionData(productsCollectionRef, {idField: 'id'}) as Observable<DataItem[]>;
  }

  getProductById$(id: string): Observable<DataItem> {
    const productDocRef = doc(this._fireStore, `products/${id}`);
    return docData(productDocRef, {idField: 'id'}) as Observable<DataItem>;
  }

  addProduct$(newProduct: any): Observable<DocumentReference<DocumentData>>{
    const productsCollectionRef = collection(this._fireStore, 'products');
    return from(addDoc(productsCollectionRef, newProduct));
  }

  createNewCollection(): CollectionReference<DataItem>{
    return collection(this._fireStore, 'products') as CollectionReference<DataItem>;
  }

  addProductByCollection$(newProduct: DataItem, collection: CollectionReference<DataItem>): Observable<DocumentReference<DataItem>>{
    return from(addDoc(collection, newProduct));
  }

  updateProductById$(productId: string, dataItem: DataItem): Observable<void>{
    const productDocRef = doc(this._fireStore, `products/${productId}`);
    return from(updateDoc(productDocRef, {...dataItem}));
  }
}