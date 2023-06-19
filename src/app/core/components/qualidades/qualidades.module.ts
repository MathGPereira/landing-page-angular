import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualidadesComponent } from './qualidades.component';

@NgModule({
    declarations: [
        QualidadesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [QualidadesComponent]
})
export class QualidadesModule { }
