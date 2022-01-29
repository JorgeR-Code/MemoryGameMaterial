import { Component, Input, OnInit } from '@angular/core';
import { playerFormat } from 'src/app/interfaces/player.interface';

@Component({
  selector: 'app-score-players',
  templateUrl: './score-players.component.html',
  styleUrls: ['./score-players.component.scss']
})
export class ScorePlayersComponent implements OnInit {

  @Input() arrayPlayers: playerFormat[] = [];
  @Input() currentPlayer: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
