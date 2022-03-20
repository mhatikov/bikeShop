import { Component, OnInit } from '@angular/core';
import { AddressShop } from 'src/app/models/addres-shop';
import { MarkerMap } from 'src/app/models/marker-map';
import { ContactService } from 'src/app/services/contact.service';
import { MapService } from 'src/app/services/map.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private mapService:MapService,
    private contactService:ContactService,
  ) { 

  }

  ngOnInit(): void {
    this._initMap();
    this._addresses = this.contactService.addresses;
  }

  private _lat: number;
  private _lon: number;
  markers:MarkerMap[];
  get lat(): number{
    return this._lat;
  }
  get lon(): number{
    return this._lon;
  }
  private _initMap(): void{
    this.mapService.initDataMap();
    this.markers = this.mapService.markers;
    this._lat = this.mapService.mapLat;
    this._lon = this.mapService.mapLon;
  }

  private _addresses:AddressShop[];
  get addresses() :AddressShop[]{
    return this._addresses;
  }
}
