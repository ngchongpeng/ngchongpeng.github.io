import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsPeopleComponent } from './insights-people.component';

describe('InsightsPeopleComponent', () => {
  let component: InsightsPeopleComponent;
  let fixture: ComponentFixture<InsightsPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
