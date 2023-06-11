import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from "./header.component";
import { MenuHamburguerComponent } from "./menu-hamburguer/menu-hamburguer.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
    declarations: [
        HeaderComponent,
        MenuHamburguerComponent,
        NavBarComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [HeaderComponent],
    providers: []
})
export class HeaderModule { }
