import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UibreportComponent } from './uibreport.component';

describe('UibreportComponent', () => {
  let component: UibreportComponent;
  let fixture: ComponentFixture<UibreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UibreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UibreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
