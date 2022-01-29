import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorePlayersComponent } from './score-players/score-players.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    ScorePlayersComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ScorePlayersComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }
