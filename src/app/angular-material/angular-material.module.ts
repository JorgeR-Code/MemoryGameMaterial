import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatRadioModule,
    MatBadgeModule
  ]
})
export class AngularMaterialModule { }
