export interface productItemInterface {
    imgUrl: string;
    price: number;
    discount: number;
    description: string;
    name: string;
    shop: string;
    main: boolean;
    id: number | string | null;
    getColor(): string;
}