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
  players:any={...players}
  constructor(){
    console.log(this.players,"gv")
    // delete this.players["0"];
    // console.log(this.players,"gv")
    
  }

}






