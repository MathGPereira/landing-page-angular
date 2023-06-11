import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header.component";
import { MenuHamburguerComponent } from "./menu-hamburguer/menu-hamburguer.component";

@NgModule({
    declarations: [
        HeaderComponent,
        MenuHamburguerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [HeaderComponent],
    providers: []
})
export class HeaderModule { }
