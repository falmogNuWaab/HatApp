import { Component, OnInit } from '@angular/core';
import{Convert, User} from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css'],
  providers: [UserService]
})
export class ShowUsersComponent implements OnInit {
  currentUser?: User [] = [];
  constructor(private userDAL: UserService) { }

  ngOnInit() {
    this.userDAL.GetAllUsers().subscribe(
      (response: User) => {
        let json = Convert.userToJson(response);
        this.currentUser = Convert.toUser(json);
        console.log(this.currentUser);
      }
    );
  }

}
