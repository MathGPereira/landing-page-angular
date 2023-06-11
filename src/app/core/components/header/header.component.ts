import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public navBar = false;

    public openNavBar(): void {
        this.navBar = !this.navBar;
    }
}
