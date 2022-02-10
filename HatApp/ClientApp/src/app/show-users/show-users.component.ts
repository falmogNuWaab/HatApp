import { Component, OnInit } from '@angular/core';
import{Convert, User} from '../User';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  Login(id: number, u: string, p: string){
  Swal.fire({
    title: 'Login',
    icon: 'info', 
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value
      if (!login || !password) {
        Swal.showValidationMessage(`Please enter login and password`)
      }
      return { login: login, password: password }
    }
  }).then((result) => {
      if(result.value.login == u && result.value.password == p){
        this.url= this.url + id;
        this.go.navigate([this.url])

      }

  })

  }
}