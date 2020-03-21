import { Component, OnInit } from '@angular/core';

import { PassengerService } from '../../services/passenger-dashboard.service';
import { Passenger } from './../../models/passenger.interface';

@Component({
  selector: 'app-passenger-all',
  templateUrl: './passenger-all.component.html',
  styleUrls: ['./passenger-all.component.scss']
})
export class PassengerAllComponent implements OnInit {

  passengers: Passenger[];
  defaultFlag: string = 'united-states-of-america.svg';

  constructor(
    private passengerService: PassengerService
  ) { }

  ngOnInit(): void {
    this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
      this.passengers = data
    });
  }
}
