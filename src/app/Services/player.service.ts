import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PlayerService
{
    constructor(private client : HttpClient){}

    url = 'https://cricket-a47f7-default-rtdb.firebaseio.com/players.json'

    addplayer(data :any):Observable<any>
    {
     return this.client.post<any>(this.url,data)
    }
}
