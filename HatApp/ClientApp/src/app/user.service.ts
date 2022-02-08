import { Inject, Injectable } from '@angular/core';
import {User} from './User';
import {HttpClient} from '@angular/common/http';
import { identity, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string ="HatAPI";
  constructor(private http:HttpClient, @Inject('BASE_URL')baseUrl:string) { 
    this.url = baseUrl + this.url;
  }

  GetUser(id:number): Observable<any>{

    return(this.http.get(this.url +"/GetUser/" +id));

  }

  GetAllUsers(): Observable<any>{
    return this.http.get<User>(this.url +"/users/");
  }

  DeleteUser(id:number){
    return this.http.delete(this.url + "/DeleteUser/{id}");
  }

  GetUserObject(id:number): Observable<any>{
    return this.http.get(this.url + "/GetUserModel/" + id);
  }

  
  
  
}

