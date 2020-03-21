import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerFooterComponent } from './passenger-footer.component';

describe('PassengerFooterComponent', () => {
  let component: PassengerFooterComponent;
  let fixture: ComponentFixture<PassengerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
