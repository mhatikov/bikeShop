import { productItemInterface } from "../interfaces/productItem.interface";
import { ProductInfoInterface } from "../interfaces/productPage.interface";
import { UserReview } from "./review";

export class DataItem{
    constructor(){
    }
    id: number | string | null;
    imgUrl: string[];
    price: number;
    discount: number;
    main: boolean;
    shop: string;
    shipping: string | null;
    name: string;
    description: string;
    discountUntil: string;
    new: boolean;
    color: string[];
    size: string[];
    review: UserReview[];
}

export class ProductItem implements productItemInterface{
    constructor(_data: DataItem){
        if(!_data) throw new Error('Entry Data');
        this.imgUrl = _data.imgUrl[0];
        this.price = _data.price;
        this.discount = _data.discount;
        this.description = _data.description;
        this.name = _data.name;
        this.shop = _data.shop;
        this.main = _data.main;
        this.id = _data.id;
        this.shipping = _data.shipping;
    }

    imgUrl: string;
    price: number;
    discount: number;
    description: string;
    name: string;
    shop: string;
    main: boolean;
    id: number | string | null;
    shipping: string | null;

    getColor(): string{
        if(this.discount >= 70) return 'red';
        if(this.discount >= 60 && this.discount < 70) return 'pink';
        if(this.discount >= 50 && this.discount < 60) return 'orange';
        return 'green';
    }
}

export class ProductPageItem implements ProductInfoInterface{
    constructor(_data: DataItem){
        if(!_data) throw new Error('Entry Data');
        this.id = _data.id;
        this.imgUrl = _data.imgUrl;
        this.price = _data.price;
        this.discount = _data.discount;
        this.main = _data.main;
        this.shop = _data.shop;
        this.name = _data.name;
        this.description = _data.description;
        this.discountUntil = _data.discountUntil;
        this.new = _data.new;
        this.color = _data.color;
        this.size = _data.size;
        this.review = _data.review;
        this.shipping = _data.shipping;
    }

    id: number | string | null;
    imgUrl: string[];
    price: number;
    discount: number;
    main: boolean;
    shop: string;
    name: string;
    description: string;
    discountUntil: string;
    new: boolean;
    color: string[];
    size: string[];
    review: UserReview[];
    shipping: string | null;

    getRate(): number{
        const result: number = this.review.reduce((val:number, element)=>{
            return element.rating + val;
        }, 0)
        if(result === 0) return 0;
        return Math.round(result/this.review.length);
    }

    getRateRemains(): number{
        return 5 - this.getRate();
    }

    getReviewCount(): number{
        return this.review.length;
    }

    getColorString(): string{
        if(this.color){
            return this.color.join('/');
        }else{
            return '';
        }
    }
}