export class AddressShop{
    constructor(street: string, home: string, country: string, city: string, postalCode: number){ 
        this._street = street;
        this._home = home;
        this._country = country;
        this._city = city;
        this._postalCode = postalCode;
    }

    private _street: string;
    private _home: string;
    private _country: string;
    private _city:string;
    private _postalCode: number;

    get street(): string{
        return this._street;
    }
    get home(): string{
        return this._home;
    }
    get country(): string{
        return this._country;
    }
    get city(): string{
        return this._city;
    }
    get postalCode(): number{
        return this._postalCode;
    }

    set street(value: string){
        this._street = value;
    }
    set home(value: string){
        this._home = value;
    }
    set country(value: string){
        this._country = value;
    }
    set city(value: string){
        this._city = value;
    }
    set postalCode(value: number){
        this._postalCode = value;
    }
}