import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualidadesComponent } from './qualidades.component';
import { FormContactModule } from 'src/app/shared/components/form-contact/form-contact.module';

@NgModule({
    declarations: [
        QualidadesComponent
    ],
    imports: [
        CommonModule,
        FormContactModule
    ],
    exports: [QualidadesComponent]
})
export class QualidadesModule { }
