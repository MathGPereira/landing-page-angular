import { Component } from '@angular/core';

import { opacityAnimations, positionAnimation } from 'src/app/shared/animations/carouselAnimations';
import { Slide } from 'src/app/shared/interfaces/Slides';


@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  animations: [
    opacityAnimations,
    positionAnimation
  ]
})
export class SlidesComponent {

    private _activeImageIndex = 0;
    public state = 'default';
    public slides: Array<Slide> = [
        {
            id: 1,
            src: '../../../../assets/images/slide-1-1339x729.jpg',
            firstDescription: '2750 duffy st',
            secondDescription: '200 sq. m.',
            thirdDescription: '$ 240.000'
        },
        {
            id: 2,
            src: '../../../../assets/images/slide-2-1339x729.jpg',
            firstDescription: '5032 hewes ave',
            secondDescription: '290 sq. m.',
            thirdDescription: '$ 390.000'
        },
        {
            id: 3,
            src: '../../../../assets/images/slide-3-1339x729.jpg',
            firstDescription: '2239 wilmar farm rd',
            secondDescription: '350 sq. m.',
            thirdDescription: '$ 340.000'
        }
    ];

    constructor() { }

    public changeImage(value: number): void {
        if(value === 1) {
            (this.activeImageIndex < 2) ? this.activeImageIndex += 1 : this.activeImageIndex = 0;
            return;
        }

        (this.activeImageIndex > 0) ? this.activeImageIndex -= 1 : this.activeImageIndex = 2;
        return;
    }

    public getActiveImageIndex(): number {
        return this._activeImageIndex;
    }

    get activeImageIndex(): number {
        return this._activeImageIndex;
    }

    set activeImageIndex(value: number) {
        this._activeImageIndex = value < this.slides.length ? value : 0;
    }
}
