import { Component } from '@angular/core';

import { rightBorder, topBorder, bottomBorder, leftBorder } from '../../animations/contactButton';

@Component({
    selector: 'app-contact-button',
    templateUrl: './contact-button.component.html',
    styleUrls: ['./contact-button.component.scss'],
    animations: [
        topBorder,
        rightBorder,
        bottomBorder,
        leftBorder
    ]
})
export class ContactButtonComponent {

    mouseOver = false;

    public changeMouseState(): void {
        this.mouseOver = !this.mouseOver;
    }
}
