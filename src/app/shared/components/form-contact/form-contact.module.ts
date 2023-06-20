import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { FormContactComponent } from './form-contact.component';
import { ContactButtonModule } from '../contact-button/contact-button.module';
import { ErrorMessageModule } from '../error-message/error-message.module';

@NgModule({
    declarations: [FormContactComponent],
    imports: [
        ContactButtonModule,
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ErrorMessageModule
    ],
    exports: [FormContactComponent]
})
export class FormContactModule { }
