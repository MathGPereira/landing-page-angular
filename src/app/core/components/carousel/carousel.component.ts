import { Component } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

    public slides = [
        {
            src: '../../../../assets/images/slide-1-1339x729.jpg',
            firstDescription: '2750 duffy st',
            secondDescription: '200 sq. m.',
            thirdDescription: '$ 240.000'
        },
        // {
        //     src: '../../../../assets/images/slide-1-1339x729.jpg',
        //     firstDescription: '2750 duffy st',
        //     secondDescription: '200 sq. m.',
        //     thirdDescription: '$ 240.000'
        // },
        // {
        //     src: '../../../../assets/images/slide-1-1339x729.jpg',
        //     firstDescription: '2750 duffy st',
        //     secondDescription: '200 sq. m.',
        //     thirdDescription: '$ 240.000'
        // }
    ]
}
