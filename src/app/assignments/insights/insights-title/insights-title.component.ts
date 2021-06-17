import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights-title',
  templateUrl: './insights-title.component.html',
  styleUrls: ['./insights-title.component.css']
})
export class InsightsTitleComponent implements OnInit {

  @Input('content') content;

  constructor() { }

  ngOnInit() {
  }
}
