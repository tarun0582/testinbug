import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
@Component({
  selector: 'app-players-stats',
  templateUrl: './players-stats.component.html',
  styleUrls: ['./players-stats.component.scss']
})
export class PlayersStatsComponent implements OnInit{
    player:any
    playerData:any
    constructor(private route: ActivatedRoute,private data:PlayersService) { 
      this.route.params.subscribe(s =>{
        console.log(s);
        console.log(s);
      })
      this.data.getPlayer().subscribe((res: any) => {
        this.playerData = Object.keys(res).map((key) => { return res[key] });
        
        console.log(this.playerData)
      })
    }
    

ngOnInit() {
  console.log(this.playerData,"hello")
  
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // this.product = products.find(product => product.id === productIdFromRoute);

}


}
