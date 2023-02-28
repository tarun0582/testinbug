import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  url="https://cricket-a47f7-default-rtdb.firebaseio.com/players.json";
  constructor(private http:HttpClient) { }
  getPlayer(){
    return this.http.get(this.url)
  }
}
