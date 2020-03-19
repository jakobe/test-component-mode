import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";

import { ShowTheModeComponent } from './show-the-mode.component';

@NgModule({
  declarations: [ShowTheModeComponent],
  exports: [ShowTheModeComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ShowTheModeModule { }
