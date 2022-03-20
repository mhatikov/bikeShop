export class MarkerMap{
    constructor(latitude: number, longitude: number, opacity: number){ 
        this._lat = latitude;
        this._lon = longitude;
        this.opacity = opacity;
    }
    private _lat:number;
    private _lon:number;

    get lat() :number{
        return this._lat;
    }
    get lon() :number{
        return this._lon;
    }

    set lat(value: number){
        this._lat = value;
    }
    set lon(value: number){
        this._lon = value;
    }

    opacity: number;

}