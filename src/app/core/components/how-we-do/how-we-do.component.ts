import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-how-we-do',
  templateUrl: './how-we-do.component.html',
  styleUrls: ['./how-we-do.component.scss']
})
export class HowWeDoComponent {

    @Output() id = new EventEmitter();

    public changeId(id: number): void {
        this.id.emit(id);
    }
}
