import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createApi } from 'unsplash-js';
import { cardFormat } from '../interfaces/card.nterface';

@Injectable({
  providedIn: 'root'
})
export class GetPhotosService {

  arrayIDs: string[] = [
    'LWRvgOTajjk',
    '8FCSGP2N1K8',
    'uV7mXfP_U90',
    '0A7X3ee8KH8',
    'KggSc2TWgXQ',
    '7rFJR_lZtKc',
    'A5E-ym6WyGM',
    '81gxkMcONEU'
  ];

  arrayURLs: string[] = [];
  arrayCards: cardFormat[] = [];

  private arrayCardsPrivate = new BehaviorSubject<cardFormat[]>([]);
  public arrayCardsPublic = this.arrayCardsPrivate.asObservable();

  constructor() {

    this.requestPhotos();
   }

  requestPhotos(){
    const unsplash = createApi({ accessKey: 'qoFXEo2twco_GUQlM0jimo57LNDtemuHgRxfHnumgZY' });

    this.arrayIDs.forEach((ID) => {

      unsplash.photos.get({ photoId: ID }).then(result => {
        if (result.errors) {
          console.log('error occurred: ', result.errors[0]);
        } else {
          let newURL = result.response.urls.small;
          this.arrayURLs.push(newURL);

          if(this.arrayURLs.length === this.arrayIDs.length){
            this.concateCards();
          }
        }
      });
    });

  };


  concateCards(){

    this.arrayCards = [];
    this.arrayURLs.forEach((URL) =>{

      let newCard: cardFormat = {
        imgURL: URL,
        state: 'default'
      }

      this.arrayCards.push({...newCard});
      this.arrayCards.push({...newCard});
    })

    this.arrayCardsPrivate.next(this.arrayCards.sort(() => Math.random() - 0.5));
  };


  restarPhotos(){
    this.concateCards();
  }
}
