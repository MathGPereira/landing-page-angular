import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ControlsComponent } from './controls/controls.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
    declarations: [
        ControlsComponent,
        SlidesComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        BrowserAnimationsModule
    ],
    exports: [
        ControlsComponent,
        SlidesComponent
    ]
})
export class CarouselModule { }
