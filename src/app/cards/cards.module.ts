import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MultiCardsComponent } from './multi-cards/multi-cards.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CardComponent,
    MultiCardsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule
  ],
  exports: [
    CardComponent,
    MultiCardsComponent

  ]
})
export class CardsModule { }
