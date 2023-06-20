import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-contact',
    templateUrl: './form-contact.component.html',
    styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent {

    text = 'Submit';

    public cleanForm(form: NgForm): void {

    }

    public contentValidity(input: HTMLInputElement): string {
        if(input.value) {
            return 'full-content';
        }

        return '';
    }
}
