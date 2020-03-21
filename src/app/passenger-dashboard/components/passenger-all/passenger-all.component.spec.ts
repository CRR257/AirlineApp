import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerAllComponent } from './passenger-all.component';

describe('PassengerAllComponent', () => {
  let component: PassengerAllComponent;
  let fixture: ComponentFixture<PassengerAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
