import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineviewComponent } from './timelineview.component';

describe('TimelineviewComponent', () => {
  let component: TimelineviewComponent;
  let fixture: ComponentFixture<TimelineviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
