import { Component, Input } from '@angular/core';

import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { openNavBar } from 'src/animations/menuBars';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [openNavBar]
})
export class NavBarComponent {

    @Input() navBar!: boolean;
    public fonts = {
        faMobile
    }
}
