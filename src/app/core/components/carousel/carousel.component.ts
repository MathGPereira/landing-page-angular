import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

import { routeAnimations } from 'src/app/shared/animations/routeAnimations';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [routeAnimations]
})
export class CarouselComponent {

    public src!: string;
    public cont = 0;
    public images = [
        '../../../../assets/images/slide-1-1339x729.jpg',
        '../../../../assets/images/slide-2-1339x729.jpg',
        '../../../../assets/images/slide-3-1339x729.jpg'
    ]

    constructor(private contexts: ChildrenOutletContexts) { }

    public getRouteAnimationData(): string {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }

    public changeImage(): void {
        this.cont > this.images.length ? this.cont = 0 : this.cont++;
        this.src = this.images[this.cont];
    }
}
