import { Component, Input } from '@angular/core';
import { bottomBar, topBar } from 'src/app/animations/animations';


@Component({
    selector: 'app-menu-hamburguer',
    templateUrl: './menu-hamburguer.component.html',
    styleUrls: ['./menu-hamburguer.component.scss'],
    animations: [
        topBar,
        bottomBar
    ]
})
export class MenuHamburguerComponent {

    @Input() mouse: boolean = false;
}
