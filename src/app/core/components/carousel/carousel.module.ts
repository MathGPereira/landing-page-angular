import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { ControlsComponent } from './controls/controls.component';

@NgModule({
    declarations: [
        ControlsComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [ControlsComponent]
})
export class CarouselModule { }
