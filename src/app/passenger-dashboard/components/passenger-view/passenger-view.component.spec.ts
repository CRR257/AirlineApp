import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerViewComponent } from './passenger-view.component';

describe('PassengerViewComponent', () => {
  let component: PassengerViewComponent;
  let fixture: ComponentFixture<PassengerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
