import { Component } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { players } from 'src/player';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  playerData:any
  players:any=players
  constructor(private data: PlayersService) {
    this.data.getPlayer().subscribe((res: any) => {
      this.playerData = Object.keys(res).map((key) => { return res[key] });
      console.log(this.playerData)
   
      
    })
    

  }
  onClick(k:any){
    this.players.pop()
    console.log(k)
    this.players.push(k)
    console.log(this.players,"abc")

  }
}
