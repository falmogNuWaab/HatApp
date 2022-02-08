import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HatService {
  url: string ="HatAPI";
  constructor(private http:HttpClient, @Inject('BASE_URL')baseUrl: string) { 
    this.url = baseUrl + this.url;
  }

  GetHat(id:number): Observable<any>{
    return(this.http.get(this.url +"/GetHat/" +id));
  }

  GetAllHats(): Observable<any>{
    return this.http.get(this.url +"/hats/");
  }

  GetMyHats(id: number): Observable<any>{
    return this.http.get(this.url + "/GetMyHatByUserID/" + id);
  }

  GetMyMonthlyHats(id: number): Observable<any>{
    return this.http.get(this.url + "/GetMonthlyHat/" + id);
  }
  DeleteHat(id:number) {
     this.http.delete(this.url + "/DeleteHat/{id}");
    }
  DeleteMyHat(id:number) {
      this.http.delete(this.url + "DeleteMyHat/{id}");
    }
}
