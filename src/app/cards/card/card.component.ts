import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { cardFormat } from 'src/app/interfaces/card.nterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip',[
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      state('matched', style({
        transform: 'rotateY(18deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('400ms')
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() card: cardFormat = {
    imgURL: '',
    state: 'default'
  }

  constructor() { }

  ngOnInit(): void {

  }

  flipCard(){

    if(this.card.state === 'default'){
      this.card.state = 'flipped'
    }else{
      this.card.state = 'default'
    }
  }

}
