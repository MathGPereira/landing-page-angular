import { Component } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

    public src!: string;
    public images = [
        '../../../../assets/images/slide-1-1339x729.jpg',
        '../../../../assets/images/slide-2-1339x729.jpg',
        '../../../../assets/images/slide-3-1339x729.jpg'
    ]

    constructor() { }
}
