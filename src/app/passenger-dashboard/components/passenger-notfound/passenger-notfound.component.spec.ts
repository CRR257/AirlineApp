import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerNotfoundComponent } from './passenger-notfound.component';

describe('PassengerNotfoundComponent', () => {
  let component: PassengerNotfoundComponent;
  let fixture: ComponentFixture<PassengerNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
