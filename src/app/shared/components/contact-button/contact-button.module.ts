import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactButtonComponent } from './contact-button.component';

@NgModule({
    declarations: [ContactButtonComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [ContactButtonComponent]
})
export class ContactButtonModule { }
