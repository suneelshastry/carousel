import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CarouselItemDirective } from "./carousel-item.directive";
import { CarouselPaginator } from "./carousel-paginator.component";
import { CarouselActions, CarouselComponent } from "./carousel.component";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CarouselComponent,
        CarouselActions,
        CarouselPaginator,
        CarouselItemDirective
    ],
    exports: [
        CarouselComponent,
        CarouselActions,
        CarouselPaginator,
        CarouselItemDirective
    ]
})
export class CarouselModule {}