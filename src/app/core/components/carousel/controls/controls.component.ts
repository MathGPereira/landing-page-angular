import { Component } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { CarouselControlService } from 'src/app/shared/services/carousel-control.service';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

    public fonts = {
        faArrowLeft,
        faArrowRight
    }

    constructor(private carouselService: CarouselControlService) { }

    public changeImage(info: number): void {
        this.carouselService.testInfo(info);
    }
}
