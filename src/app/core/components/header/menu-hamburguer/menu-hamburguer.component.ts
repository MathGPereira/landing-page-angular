import { Component, EventEmitter, Output } from '@angular/core';

import { bottomBar, hamburguerMenuX, topBar } from 'src/app/shared/animations/menuBars';
import { MouseEvents } from 'src/app/shared/interfaces/MouseEvents';


@Component({
    selector: 'app-menu-hamburguer',
    templateUrl: './menu-hamburguer.component.html',
    styleUrls: ['./menu-hamburguer.component.scss'],
    animations: [
        topBar,
        bottomBar,
        hamburguerMenuX
    ]
})
export class MenuHamburguerComponent {

    @Output() public openOff = new EventEmitter<void>();
    public mouseState: MouseEvents = {
        mouseOverOut: false,
        mouseClick: false
    };

    public modifyClickStatus(): void {
        this.mouseState.mouseClick = !this.mouseState.mouseClick;
        this.openNavBar();
    }

    public modifyMouseStatus(): void {
        this.mouseState.mouseOverOut = !this.mouseState.mouseOverOut;
    }

    private openNavBar(): void {
        this.openOff.emit();
    }
}
