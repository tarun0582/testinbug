import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersStatsComponent } from './components/players-stats/players-stats.component';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes = [
  {path:'',redirectTo:'player',pathMatch:'full'},
  {path:'player',component:PlayersComponent},
  {path: 'player/:playerId', component: PlayersStatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
