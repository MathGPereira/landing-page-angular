import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

import { opacityAnimations } from 'src/app/shared/animations/opacityAnimations';


@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  animations: [
    opacityAnimations
  ]
})
export class SlidesComponent implements OnInit, OnDestroy {

    private timerSubscription!: Subscription;
    private _activeImageIndex = 0;
    public state = 'default';
    public slides = [
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

    public ngOnInit(): void {
        this.timerInit();
    }

    public ngOnDestroy(): void {
        this.timerFinish();
    }

    public changeImage(value: number): void {
        (this.activeImageIndex < 2 && value === 1) ? this.activeImageIndex += 1 : this.activeImageIndex = 0;
        (this.activeImageIndex > 0 && value === -1) ? this.activeImageIndex -= 1 : this.activeImageIndex = 2;
    }

    get activeImageIndex(): number {
        return this._activeImageIndex;
    }

    set activeImageIndex(value: number) {
        this._activeImageIndex = value < this.slides.length ? value : 0;
    }

    private timerInit(): void {
        this.state === 'default' ? this.state = 'invisible' : this.state = 'default';
        this.timerSubscription = timer(3800).subscribe(() => {
            this.activeImage(this.activeImageIndex + 1)
        });
    }

    private timerFinish(): void {
        this.timerSubscription?.unsubscribe();
    }

    private activeImage(index: number): void {
        this.activeImageIndex = index;
        this.timerInit();
    }
}
