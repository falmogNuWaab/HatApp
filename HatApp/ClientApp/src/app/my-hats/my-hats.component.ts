import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserObject, UOConvert} from '../UserObject';
import { UserService } from '../user.service';
import { Hat, HatConvert } from '../Hat';
import { HatService } from '../hat.service';
import {MonthlyHats} from '../Monthly-Hats';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-my-hats',
  templateUrl: './my-hats.component.html',
  styleUrls: ['./my-hats.component.css'],
  providers: [UserService]
})
export class MyHatsComponent implements OnInit {
currentUser:UserObject;
allHats: Hat[] = [];
id = Number(this.route.snapshot.paramMap.get('id'));
url: string;
  constructor(private userService: UserService, private route: ActivatedRoute, private hatService: HatService, @Inject('BASE_URL')baseUrl: string) {
  this.userService.GetUserObject(this.id).subscribe(
    (response: any)=>{
      let json = UOConvert.userObjectToJson(response);
      this.currentUser = UOConvert.toUserObject(json);
      console.log(this.currentUser);
    }
  );
    this.hatService.GetAllHats().subscribe(
      (response: any) => {
        let json= HatConvert.hatToJson(response);
        this.allHats = HatConvert.toHat(json);
      } 
    );
    this.url = baseUrl + "ShowUsers/MyHats/" + this.id;   
}

ngOnInit() {
}


RemoveFromCollection(id: number) {
  this.hatService.DeleteMyHat(id);
}
WearHat(hID: number){
  let today = new Date();
  let mm = today.getDate().toString().padStart(2,"0");
  let dd = today.getDay().toString().padStart(2,"0");
  let yyyy = today.getFullYear().toString();  
  let lwd: string = mm + "/" + dd + "/" + yyyy;
  let tempHat: MonthlyHats = {id:0,userId:this.id,hatId:hID,lastWornDate:lwd};
  console.log("Uid: " + this.id);
  console.log("Hid: " + hID);
  console.log("lwd: "+ lwd);
  console.log(tempHat);
  this.hatService.WearThisHat(tempHat).subscribe(
    (response: any)=>{    
    }
  );
}
}
