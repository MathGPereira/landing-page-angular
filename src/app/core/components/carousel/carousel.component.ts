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

    constructor(private contexts: ChildrenOutletContexts) { }

    getRouteAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}
