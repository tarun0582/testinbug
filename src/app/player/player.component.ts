import { Component} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AppModule } from "../app.module";

@Component({
    selector : 'app-player',
    templateUrl :'./player.component.html',
    styleUrls :['./player.component.css']
})

export class PlayerComponent {

    constructor(private add :AppModule){}

    playerform = new FormGroup({
        name :      new FormControl('',[Validators.required,Validators.minLength(4)]),
        age : new FormControl(18,[Validators.required,Validators.min(18),Validators.max(50)]),
        id :new FormControl('',Validators.required),
        team : new FormControl('',Validators.required),
        no_of_matches : new FormControl(0,Validators.required),
        type : new FormControl('Allrounder',Validators.required,)
    })

    submit()
    {
        this.add.service.addplayer(this.playerform.value).subscribe((response)=>{
            console.log(response);
        })
        // alert(JSON.stringify(this.playerform.value))
        this.clearForm();
    
        
    }

    get controls()
    {
        return this.playerform.controls
    }

    clearForm() {

        this.playerform.reset({
              'name': '',
              'age': 18,
              'id': '',
              'team': '',
              'no_of_matches':0,
              'type':'Allrounder'
             });
        }
}