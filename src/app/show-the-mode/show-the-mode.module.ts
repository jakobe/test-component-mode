import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowTheModeComponent } from './show-the-mode.component';

@NgModule({
  declarations: [ShowTheModeComponent],
  exports: [ShowTheModeComponent],
  imports: [
    CommonModule
  ]
})
export class ShowTheModeModule { }
