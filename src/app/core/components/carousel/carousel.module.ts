import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";

import { ControlsComponent } from './slides/controls/controls.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
    declarations: [
        ControlsComponent,
        SlidesComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        RouterTestingModule
    ],
    exports: [
        ControlsComponent,
        SlidesComponent
    ]
})
export class CarouselModule { }
