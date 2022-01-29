import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { cardFormat } from 'src/app/interfaces/card.nterface';
import { playerFormat } from 'src/app/interfaces/player.interface';
import { GetPhotosService } from 'src/app/services/get-photos.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.scss']
})
export class MultiCardsComponent implements OnInit {

  arrayCards: cardFormat[] = [];
  cardsFlipped: cardFormat[] = [];

  arrayPlayers: playerFormat[] = [];

  currentPlayer: string = '';
  position: number = 0;

  constructor(private photosService: GetPhotosService, private playerService: PlayersService) { }

  ngOnInit(): void {

    this.photosService.arrayCardsPublic.subscribe((packCards) => {
      this.arrayCards = packCards;
    });

    this.playerService.arrayPlyersPublic.subscribe((players) => {
      this.arrayPlayers = players;
      console.log(this.currentPlayer);
      this.currentPlayer = this.arrayPlayers[0].name;
    });

    this.playerService.currentPositionPublic.subscribe((position) => {
      this.position = position;
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

      this.cardsFlipped = [];

      if(result === 'matched'){
        this.addScore();
      }else if(result === 'default'){

        this.position ++;

        if(this.position === this.arrayPlayers.length){
          this.position = 0;
        }

        this.currentPlayer = this.arrayPlayers[this.position].name;

      }

    }, 1000)


  }


  addScore(){

    this.arrayPlayers.map((player) =>{
      if (this.currentPlayer === player.name){
        player.score ++;
      }
    })
  };

}
