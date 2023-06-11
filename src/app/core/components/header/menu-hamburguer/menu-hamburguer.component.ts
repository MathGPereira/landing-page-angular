import { Component } from '@angular/core';

import { bottomBar, hamburguerMenuX, topBar } from 'src/animations/menuBars';
import { MouseEvents } from 'src/interfaces/MouseEvents';


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

    protected mouseState: MouseEvents = {
        mouseOverOut: false,
        mouseClick: false
    };

    protected modifyClickStatus(): void {
        this.mouseState.mouseClick = !this.mouseState.mouseClick;
    }

    protected modifyMouseStatus(): void {
        this.mouseState.mouseOverOut = !this.mouseState.mouseOverOut;
    }
}
