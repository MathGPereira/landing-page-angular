import { Component, Input } from '@angular/core';

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

    @Input() buttonText!: string;

    public changeMouseState(): void {
        this.mouseOver = !this.mouseOver;
    }

    public backgroundColor(): string {
        if(!(this.buttonText === 'Contact us')) {
            return 'background-hover'
        }

        return 'background-transparent';
    }
}
