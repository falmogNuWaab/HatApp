import { Component, OnInit } from '@angular/core';
import{Convert, User} from '../User';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css'],
  providers: [UserService]
})
export class ShowUsersComponent implements OnInit {
  currentUser?: User[] = [];
  url: string = './ShowUsers/MyHats/';

  constructor(private userDAL: UserService, private go: Router) { }

  ngOnInit() {
    this.userDAL.GetAllUsers().subscribe(
      (response: User) => {
        let json = Convert.userToJson(response);
        this.currentUser = Convert.toUser(json);
        console.log(this.currentUser);
      }
    );
  }

  Login(id: number) {
    
    var Username = prompt("Enter Username");
    var Password = prompt("Enter Password");

    if(Username == "ab" && Password == "ab" ){
      this.url= this.url + id;
      this.go.navigate([this.url])
    }
  }

}
