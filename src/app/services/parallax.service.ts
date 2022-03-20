import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParallaxService {

  FORCLOUDS:number = 40;
  FORMOUNTAINS:number = 20;
  FORHUMAN:number = 10;

  SPEED:number = 0.05;

  setMouseParallaxStyleX(coordXprocent:number, positionX:number):number{
    const distX:number = coordXprocent - positionX;
    const newPositionX:number = positionX + (distX * this.SPEED);
    return newPositionX;
  }

  setMouseParallaxStyleY(coordYprocent:number, positionY:number):number{
    const distY:number = coordYprocent - positionY;
    const newPositionY:number = positionY + (distY * this.SPEED);
    return newPositionY;
  }

  constructor() { }
}
