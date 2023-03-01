import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
@Component({
  selector: 'app-players-stats',
  templateUrl: './players-stats.component.html',
  styleUrls: ['./players-stats.component.scss']
})
export class PlayersStatsComponent  {
  player:any={}
  playerData:any
  constructor(private route: ActivatedRoute,private data: PlayersService) { 
  }
  ngOnInit() {
    this.data.getPlayer().subscribe((res: any) => {
      this.playerData = Object.keys(res).map((key) => { return res[key] });
      console.log(this.playerData,"gdfthgv")
      const routeParams = this.route.snapshot.paramMap;
      const playerIdFromRoute = Number(routeParams.get('player.id'));
      console.log(this.playerData,"abc")
      this.player = this.playerData.find((player:any) => player.id == playerIdFromRoute);
      console.log(this.player,"abvgf")
    })
  }
  }








