import { DataItem } from "../models/product-list.item";

export interface ProductInfoInterface extends DataItem{
    getRate(): number;
    getReviewCount(): number;
    getColorString(): string;
    getRateRemains(): number;
}