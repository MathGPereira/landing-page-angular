import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, RouterOutlet } from "@angular/router";

import { ControlsComponent } from './slides/controls/controls.component';
import { SlidesComponent } from './slides/slides.component';
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations: [
        ControlsComponent,
        SlidesComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterModule,
        RouterOutlet
    ],
    exports: [
        ControlsComponent,
        SlidesComponent
    ]
})
export class CarouselModule { }
