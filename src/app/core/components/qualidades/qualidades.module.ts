import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualidadesComponent } from './qualidades.component';
import { FormContactComponent } from './form-contact/form-contact.component';

@NgModule({
    declarations: [
        QualidadesComponent,
        FormContactComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [QualidadesComponent]
})
export class QualidadesModule { }
