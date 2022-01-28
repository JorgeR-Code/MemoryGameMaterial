import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { cardFormat } from 'src/app/interfaces/card.nterface';
import { GetPhotosService } from 'src/app/services/get-photos.service';

@Component({
  selector: 'app-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.scss']
})
export class MultiCardsComponent implements OnInit {

  arrayCards: cardFormat[] = [];
  cardsFlipped: cardFormat[] = [];

  constructor(private photosService: GetPhotosService) { }

  ngOnInit(): void {

    this.photosService.arrayCardsPublic.subscribe((packCards) => {
      this.arrayCards = packCards;
    });
  }

  flipCards(index: number){

    let currentCard = this.arrayCards[index];

    if(currentCard.state === 'default' && this.cardsFlipped.length < 2){
      currentCard.state = 'flipped';
      this.cardsFlipped.push(currentCard);

      if(this.cardsFlipped.length === 2){
        this.checkMatch();
      };

    }else if(currentCard.state === "flipped"){
      currentCard.state = 'default';
      this.cardsFlipped.pop();

    }
  };

  checkMatch(){

    setTimeout(() => {

      let card1 = this.cardsFlipped[0];
      let card2 = this.cardsFlipped[1];

      const result = card1.imgURL === card2.imgURL ? "matched" : "default";

      card1.state =  card2.state = result;

      console.log(card1, card2, result)
      this.cardsFlipped = [];
    }, 1000)


  }

}
