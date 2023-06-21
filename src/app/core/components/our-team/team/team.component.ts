import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

    @Input() src!: string;
    @Input() name!: string;
    @Input() function!: string;
}
