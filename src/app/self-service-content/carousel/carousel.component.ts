import { AfterContentInit, Component, ContentChildren, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';

@Component({
  selector: 'carousel-actions',
  template: '<ng-content></ng-content>',
})
export class CarouselActions { }

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterContentInit {

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChild('content', {read: ViewContainerRef}) view: ViewContainerRef;

  currentIndex = 0;
  totalItems = 0;

  ngAfterContentInit() {
    this.currentIndex = 0;
    this.totalItems = this.items.length;
  }

  get currentItem() {
    return this.items.get(this.currentIndex)._template;
  } 

  nextItem() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevItem() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

}
