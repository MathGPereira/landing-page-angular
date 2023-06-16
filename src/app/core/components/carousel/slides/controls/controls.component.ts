import { Component, Output, EventEmitter } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

    @Output() changeImage = new EventEmitter<number>()
    public fonts = {
        faArrowLeft,
        faArrowRight
    }

    constructor() { }

    public arrowControl(value: number): void {
        this.changeImage.emit(value);
    }
}
