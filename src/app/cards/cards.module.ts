import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MultiCardsComponent } from './multi-cards/multi-cards.component';



@NgModule({
  declarations: [
    CardComponent,
    MultiCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    MultiCardsComponent

  ]
})
export class CardsModule { }
