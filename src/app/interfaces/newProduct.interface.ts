import { UploadedImage } from "../models/uploadImage";
import { MultiSelectObject } from "./multi-select.interface";

export interface NewProduct{
    name: string;
    shop: string;
    description: string;
    price: number;
    size: MultiSelectObject[];
    color: MultiSelectObject[];
    images: UploadedImage[];
}