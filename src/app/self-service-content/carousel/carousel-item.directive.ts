import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[carouselItem]'
})
export class CarouselItemDirective {
  constructor(public _template: TemplateRef<any>) { }
}
