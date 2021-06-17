import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsBodyComponent } from './insights-body.component';

describe('InsightsBodyComponent', () => {
  let component: InsightsBodyComponent;
  let fixture: ComponentFixture<InsightsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
