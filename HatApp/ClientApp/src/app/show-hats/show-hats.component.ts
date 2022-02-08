import { Component, OnInit } from '@angular/core';
import { HatService } from '../hat.service';
import { Hat } from '../Hat';
@Component({
  selector: 'app-show-hats',
  templateUrl: './show-hats.component.html',
  styleUrls: ['./show-hats.component.css']
})
export class ShowHatsComponent implements OnInit {
 allHats: Hat[]=[];
  constructor(private hatService: HatService) { 
    this.hatService.GetAllHats().subscribe(
      (response: any) => {this.allHats = response}
    )
  }

  ngOnInit() {
    
  }

}
