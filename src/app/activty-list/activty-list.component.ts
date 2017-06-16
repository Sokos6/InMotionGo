import { Component, OnInit } from '@angular/core';
import { IActivity } from '../shared/activity.model';

@Component({
  selector: 'app-activty-list',
  templateUrl: './activty-list.component.html',
  styleUrls: ['./activty-list.component.css']
})
export class ActivtyListComponent implements OnInit {

	activities: IActivity[];

  constructor() { }

  ngOnInit() {
  }

}
