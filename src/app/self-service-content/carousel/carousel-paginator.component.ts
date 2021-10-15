import { Component, Input } from "@angular/core";


@Component({
    selector: 'carousel-paginator',
    template: `
        <ng-container *ngFor="let item of _totalItems;let i=index">
            <span class="circle"  [ngClass]="{'active': i === currentSelectedIndex}"></span>
        </ng-container>
    `,
    styles: [
        '.circle {width: 0.4rem; height: 0.4rem; border-radius: 50%; background-color: #bbb; display: inline-block}',
        '.active { background-color: black }'
    ]
})
export class CarouselPaginator {
    _totalItems = [];

    @Input()
    set totalItems(t: number) {
        if (!t) {
            return;
        }

        this._totalItems = new Array(t);
    }
    @Input() currentSelectedIndex;
}