import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { playerFormat } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  numberPlayers: number = 4;

  arrayPlayers: playerFormat[] = [];

  private arrayPlayersPrivate = new BehaviorSubject<playerFormat[]>([]);
  public arrayPlyersPublic = this.arrayPlayersPrivate.asObservable();

  private currentPosition = new BehaviorSubject<number>(0);
  public currentPositionPublic = this.currentPosition.asObservable();


  constructor() {
    this.generatePlayers();

  }

  generatePlayers(){

    for (let index = 0; index < this.numberPlayers; index++) {
      const newPlayer: playerFormat = {
        name: 'Jugador ' + (index + 1),
        score: 0
      }

      this.arrayPlayers.push(newPlayer);
    }

    this.arrayPlayersPrivate.next(this.arrayPlayers);

    }

}
