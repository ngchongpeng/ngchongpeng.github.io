import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights-topic',
  templateUrl: './insights-topic.component.html',
  styleUrls: ['./insights-topic.component.css']
})
export class InsightsTopicComponent implements OnInit {

  @Input('topic') topic;

  constructor() { }

  ngOnInit() {
  }

}
