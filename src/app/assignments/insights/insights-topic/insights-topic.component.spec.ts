import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsTopicComponent } from './insights-topic.component';

describe('InsightsTopicComponent', () => {
  let component: InsightsTopicComponent;
  let fixture: ComponentFixture<InsightsTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
