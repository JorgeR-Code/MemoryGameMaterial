import { Component, OnInit } from '@angular/core';
import { cardFormat } from 'src/app/interfaces/card.nterface';
import { GetPhotosService } from 'src/app/services/get-photos.service';

@Component({
  selector: 'app-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.scss']
})
export class MultiCardsComponent implements OnInit {

  arrayCards: cardFormat[] = [
    {
      imgURL: './assets/images/front.jpg',
      state: 'default'
    },
    {
      imgURL: './assets/images/front.jpg',
      state: 'flipped'
    },
    {
      imgURL: './assets/images/front.jpg',
      state: 'default'
    }

  ];

  constructor(private photosService: GetPhotosService) { }

  ngOnInit(): void {
  }

}
