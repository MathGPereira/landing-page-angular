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
        const name = <HTMLInputElement>document.querySelector('#name');
        const email = <HTMLInputElement>document.querySelector('#email');
        const phone = <HTMLInputElement>document.querySelector('#phone');
        if(form.valid) {
            name.value = '';
            email.value = '';
            phone.value = '';
        }
    }

    public contentValidity(input: HTMLInputElement): string {
        if(input.value) {
            return 'full-content';
        }

        return '';
    }
}
