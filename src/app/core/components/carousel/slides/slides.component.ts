import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent {

    @Input() src = '';
    @Input() firstDescription = '';
    @Input() secondDescription = '';
    @Input() thirdDescription = '';
}
