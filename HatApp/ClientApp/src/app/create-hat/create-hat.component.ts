import { Component, OnInit } from '@angular/core';
import { HatService } from '../hat.service';

@Component({
  selector: 'app-create-hat',
  templateUrl: './create-hat.component.html',
  styleUrls: ['./create-hat.component.css']
})
export class CreateHatComponent implements OnInit {

  constructor(private hatService: HatService) { }

  ngOnInit() {
  }

}
