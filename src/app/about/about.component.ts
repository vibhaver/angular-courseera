import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared folder/leader';
import {LeaderService} from'../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	Leaders: Leader[];
  constructor(private leaderService: LeaderService)
		 { } 
	

  ngOnInit() {
	this.Leaders= this.leaderService.getLeaders();
  }

}
