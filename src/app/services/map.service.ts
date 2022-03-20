import { Injectable } from '@angular/core';
import { MarkerMap } from '../models/marker-map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { 
  }

  markers:MarkerMap[];
  mapLat: number;
  mapLon: number;

  initDataMap(): void{
    if(this.mapLat && this.mapLon && this.markers) return;
    this.markers = [
      new MarkerMap(51.541137, 46.013617, 1)
    ]
    this.mapLat = 51.5406;
    this.mapLon = 46.0086;
  }
}
