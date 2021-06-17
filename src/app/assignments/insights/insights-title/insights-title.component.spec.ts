import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsTitleComponent } from './insights-title.component';

describe('InsightsTitleComponent', () => {
  let component: InsightsTitleComponent;
  let fixture: ComponentFixture<InsightsTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
