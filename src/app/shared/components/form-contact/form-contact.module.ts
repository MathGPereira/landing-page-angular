import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormContactComponent } from './form-contact.component';
import { ContactButtonModule } from '../contact-button/contact-button.module';

@NgModule({
    declarations: [FormContactComponent],
    imports: [
        ContactButtonModule,
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [FormContactComponent]
})
export class FormContactModule { }
