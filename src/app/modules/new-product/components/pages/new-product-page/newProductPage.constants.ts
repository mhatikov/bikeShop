import { MultiSelectObject } from "src/app/interfaces/multi-select.interface";
import { NewProduct } from "src/app/interfaces/newProduct.interface";
import { DataItem } from "src/app/models/product-list.item";

export const size: MultiSelectObject[] = [
    {value: 'XS'},
    {value: 'S'},
    {value: 'M'},
    {value: 'L'},
    {value: 'XL'},
]

export const color: MultiSelectObject[] = [
    {value: 'Red'},
    {value: 'Green'},
    {value: 'Gray'},
    {value: 'Black'},
    {value: 'Purple'},
]

export function createDataItem(newProductObj: NewProduct): DataItem{
    return {
        review : [],
        new: true,
        main : false, //fake
        discount : 0, //fake
        discountUntil : '', //fake
        shipping : null, //fake
        imgUrl : [],
        shop: newProductObj.shop,
        name : newProductObj.name,
        description : newProductObj.description,
        color : newProductObj.color.map((element)=>{return element.value}),
        size : newProductObj.size.map((element)=>{return element.value}),
        id: null, //fake
        price: newProductObj.price,
    };
}