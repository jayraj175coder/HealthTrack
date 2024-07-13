// summary.module.ts (if you have a separate module for summary)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryComponent } from './summary.component';

@NgModule({
    declarations: [SummaryComponent],
    imports: [CommonModule],
    exports: [SummaryComponent]
})
export class SummaryModule { }
