import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { OrganaizerComponent } from 'src/app/modules/forms-module/components/organaizer/organaizer.component';


@Directive({
  selector: '[appCheckActiveDay]'
})
export class CheckActiveDayDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _organaizer: OrganaizerComponent,
  ) { }

  @Input() set appCheckActiveDay(condition: Date | undefined){
    if(this._organaizer.selectedDateObj === undefined ) return;

    if(this._organaizer.selectedYear === condition?.getFullYear() &&
      this._organaizer.selectedMonth === condition?.getMonth() &&
      Number(this._elementRef.nativeElement.textContent) === condition?.getDate()){
      this._renderer.addClass(this._elementRef.nativeElement, '_active');
    }else{
        this._renderer.removeClass(this._elementRef.nativeElement, '_active');
    }
  }
}
