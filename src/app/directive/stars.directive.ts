import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStars]'
})
export class StarsDirective {

  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appStars(condition: number) {
    if(condition > 0){
      for(let i = 0; i < condition; i++){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }else{
      this.viewContainer.clear();
    }
  }
}
