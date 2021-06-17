import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights-body',
  templateUrl: './insights-body.component.html',
  styleUrls: ['./insights-body.component.css']
})
export class InsightsBodyComponent implements OnInit {

  @Input('content') content;

  constructor() { }

  ngOnInit() {
  }

}
