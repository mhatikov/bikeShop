import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CellsSlide } from 'src/app/models/cells-slide';
import { CellsSliderService } from 'src/app/services/cells-slider.service';


@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit, AfterViewInit{

  constructor(private cellsService:CellsSliderService) { 

  }

  slides:CellsSlide[];
  indexActiveSlider:number = 0;

  @ViewChild('sliderBox')
  sliderBox:ElementRef;
  @ViewChild('leftSlide')
  leftSlide:ElementRef;
  @ViewChild('rightSlide')
  rightSlide:ElementRef;


  ngOnInit(): void {
    this.slides = this.cellsService.slides;
  }

  ngAfterViewInit(): void {
    this.leftSlide.nativeElement.style.top = `-${(this.slides.length - 1) * 100}vh`
  }

  changeSlide(direction:string):void{
    const sliderHeight:number = this.sliderBox.nativeElement.clientHeight;
    if(direction === 'up'){
      this.indexActiveSlider++;
      if(this.indexActiveSlider >= this.slides.length) this.indexActiveSlider = 0;
    }
    if(direction === 'down'){
      this.indexActiveSlider--;
      if(this.indexActiveSlider < 0) this.indexActiveSlider = this.slides.length - 1;
    }

    this.leftSlide.nativeElement.style.transform = `translateY(${this.indexActiveSlider * sliderHeight}px)`;
    this.rightSlide.nativeElement.style.transform = `translateY(-${this.indexActiveSlider * sliderHeight}px)`;
  }


}
