import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ControlsComponent } from './controls/controls.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
    declarations: [
        ControlsComponent,
        SlidesComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        ControlsComponent,
        SlidesComponent
    ]
})
export class CarouselModule { }
