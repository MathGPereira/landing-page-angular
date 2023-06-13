import { Component } from '@angular/core';
import { animatedBorder } from '../../animations/buttonContact';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss'],
  animations: [animatedBorder]
})
export class ContactButtonComponent {

}
