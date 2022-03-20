import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { productItemInterface } from 'src/app/interfaces/productItem.interface';
import { ProductItem } from 'src/app/models/product-list.item';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit, OnDestroy {

  constructor(
    private _fb: FormBuilder,
    private _productService: ProductListService,
    private _router: Router
  ) { }

  productsStream: Subscription;
  products: productItemInterface[] = [];

  detailsForm: FormGroup;
  deliveryTypeValueStream: Subscription | undefined;
  paymentTypeValueStream: Subscription | undefined;

  step: number = 0;

  goodsStep: boolean | undefined;
  deliveryStep: boolean | undefined;
  paymentStep: boolean | undefined;
  dateStep: boolean | undefined;

  displayDropDownList: boolean = false;
  goodsRegExp: RegExp | undefined;

  @ViewChild("dropdownList") dropdownList: ElementRef | undefined;
  @ViewChild("goodsInput") goodsInput: ElementRef | undefined;

  @HostListener('click', ["$event.target"]) onClick(element: Element){
    if(element !== this.dropdownList?.nativeElement && element !== this.goodsInput?.nativeElement && this.displayDropDownList) 
    this.displayDropDownList = false;
  }

  private _initStreamProducts(): void{
    if(!this.productsStream){
      this.productsStream = this._productService.getProductElementsFromBase$().subscribe(res => this.products.push(new ProductItem(res)));
    }
  }

  private _initFormGroups(): void{
    this.detailsForm = this._fb.group({
      goods: this._fb.group({
        product: ["", [Validators.required], [this._goodsValidator.bind(this)]],
      }),
      address: this._fb.group({
        country: ["", [Validators.required]],
        city: ["", [Validators.required]],
        street: ["", [Validators.required]],
      }),
      payment: this._fb.group({
        paymentType: ["", [Validators.required]],
        card: this._fb.group({
          cardNumber: [""],
          cardCvv: [""],
          cardMonth: [""],
          cardYear: [""],
        })
      }),
      delivery: this._fb.group({
        deliveryType: ["", [Validators.required]],
        date: [""]
      })
    })
  }

  private _goodsValidator(control: FormControl): Observable<ValidationErrors|null>{
    return this._productService.getDataByNameFromBase$(control.value).pipe(
      map(res => res ? null : {"goodsError" : true}),
    )
  }

  private _cardMonthValidator(control: FormControl): ValidationErrors|null{
    if(Number(control.value) <= 12 && Number(control.value) >= 1) return null;
    return {"cardMonth": true};
  }

  private _cardYearValidator(control: FormControl): ValidationErrors|null{
    const nowDate: Date = new Date();
    const lastDigitsYear: number = nowDate.getFullYear() % 2000;
    if(Number(control.value) === lastDigitsYear && Number(control.parent?.get('cardMonth')?.value) >= nowDate.getMonth()){
      return null;
    }else if(control.value > lastDigitsYear && control.value.length === 2) return null;
    return {"cardYear": true};
  }

  private _deliveryDateDynamicValidation(): void{
    const deliveryType = this.detailsForm.get(['delivery', 'deliveryType']);
    const deliveryDate = this.detailsForm.get(['delivery', 'date']);

    this.deliveryTypeValueStream = deliveryType?.valueChanges.subscribe((type: string) =>{
      if(type === 'date'){
        deliveryDate?.setValidators(Validators.required);
        deliveryDate?.updateValueAndValidity();
      }else{
        deliveryDate?.clearValidators();
        deliveryDate?.updateValueAndValidity();
      }
    })
  }

  private _paymentTypeDynamicValidation(): void{
    const paymentType = this.detailsForm.get(['payment', 'paymentType']);

    const paymentCardNumber = this.detailsForm.get(['payment', 'card', 'cardNumber']);
    const paymentCardCvv = this.detailsForm.get(['payment', 'card', 'cardCvv']);
    const paymentCardMonth = this.detailsForm.get(['payment', 'card', 'cardMonth']);
    const paymentCardYear = this.detailsForm.get(['payment', 'card', 'cardYear']);

    this.paymentTypeValueStream = paymentType?.valueChanges.subscribe((type: string) =>{
      if(type === 'Card'){
        paymentCardNumber?.setValidators([Validators.required, Validators.pattern(/^\d{16}$/)]);
        paymentCardNumber?.updateValueAndValidity();
        paymentCardCvv?.setValidators([Validators.required, Validators.pattern(/^\d{3}$/)]);
        paymentCardCvv?.updateValueAndValidity();
        paymentCardMonth?.setValidators(<any>this._cardMonthValidator);
        paymentCardMonth?.updateValueAndValidity();
        paymentCardYear?.setValidators(<any>this._cardYearValidator);
        paymentCardYear?.updateValueAndValidity();
      }else{
        paymentCardNumber?.clearValidators();
        paymentCardNumber?.updateValueAndValidity();
        paymentCardCvv?.clearValidators();
        paymentCardCvv?.updateValueAndValidity();
        paymentCardMonth?.clearValidators();
        paymentCardMonth?.updateValueAndValidity();
        paymentCardYear?.clearValidators();
        paymentCardYear?.updateValueAndValidity();
      }
    })
  }

  revertDisplayProductList(): void{
    this.displayDropDownList = !this.displayDropDownList;
  }

  initGoodsRegExp(): void{
    let valueElem = this.detailsForm.get(['goods', 'product'])?.value.trim().toLowerCase();
    if(valueElem.length > 0){
      this.goodsRegExp = new RegExp('^' + `${valueElem}`);
    }else{
      this.goodsRegExp = undefined;
    }
    if(!this.displayDropDownList) this.displayDropDownList = true;
  }

  checkValidGoodsName(nameElem: string): boolean{
    if(!this.goodsRegExp) return true;
    return this.goodsRegExp.test(nameElem.trim().toLowerCase());
  }

  selectProduct(nameProduct: string): void{
    const goodsFormGroup = this.detailsForm.get('goods');
    goodsFormGroup?.patchValue({
      product: `${nameProduct}`
    });
    this.displayDropDownList = false;
  }

  displayOrganaizer(): boolean{
    const deliveryValue = this.detailsForm.get(['delivery', 'deliveryType'])?.value;
    if(deliveryValue === 'date' && deliveryValue.length > 0) return true;
    return false;
  }

  getCustomDate(ev: any): void{
    const delivery = this.detailsForm.get('delivery');
    delivery?.patchValue({
      date: ev
    })
  }

  submitForm(): void{
    switch (this.step){
      case 0:
        if(this.detailsForm.get('goods')?.valid) {
          this.goodsStep = true;
          this.step++;
        }else{
          this.goodsStep = false;
        }
        break;
      case 1:
        if(this.detailsForm.get('address')?.valid){
          this.deliveryStep = true;
          this.step++;
        }else{
          this.deliveryStep = false;
        }
        break;
      case 2:
        if(this.detailsForm.get('payment')?.valid){
          this.paymentStep = true;
          this.step++;
        }else{
          this.paymentStep = false;
        }
        break;
      case 3:
        if(this.detailsForm.get('delivery')?.valid){
          this.dateStep = true;
          this.step++;
        }else{
          this.dateStep = false;
        }
        break;
      case 4:
        if(this.detailsForm.valid){
          this._router.navigate(['order', 'finish']);
        }
        break;
    }
  }

  previousStep(): void{
    if(this.step < 5 && this.step > 0) this.step--;
  }

  ngOnInit(): void {
    this._initStreamProducts();
    this._initFormGroups();
    this._deliveryDateDynamicValidation();
    this._paymentTypeDynamicValidation();
  }

  ngOnDestroy(): void{
    this.productsStream.unsubscribe();
    this.deliveryTypeValueStream?.unsubscribe();
    this.paymentTypeValueStream?.unsubscribe();
  }
}