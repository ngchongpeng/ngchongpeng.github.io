import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights-people',
  templateUrl: './insights-people.component.html',
  styleUrls: ['./insights-people.component.css']
})
export class InsightsPeopleComponent implements OnInit {

  @Input('person') person;

  constructor() { }

  ngOnInit() {
  }

}
