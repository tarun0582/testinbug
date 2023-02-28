import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { players } from 'src/player';
@Component({
  selector: 'app-players-stats',
  templateUrl: './players-stats.component.html',
  styleUrls: ['./players-stats.component.scss']
})
export class PlayersStatsComponent  {
  players:any=players
  newObj:any;
  constructor(){
    console.log(this.players,"gv")
    const { "0": removeKey, ...newObj } = this.players;
    console.log(newObj,"afa")
  
    // delete this.players["0"];
    // console.log(this.players,"gv")
    
  }

}






