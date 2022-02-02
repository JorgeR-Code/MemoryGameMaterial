import { Component, OnInit } from '@angular/core';
import { GetPhotosService } from 'src/app/services/get-photos.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private numberPlayer: PlayersService, private restarCards: GetPhotosService) { }

  ngOnInit(): void {

  }


  changePlayersNumber(num: number){
     this.numberPlayer.changePlayers(num);
     this.restarCards.restarPhotos();

  };

}
