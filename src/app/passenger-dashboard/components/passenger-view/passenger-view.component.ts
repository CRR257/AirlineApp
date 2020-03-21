import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { PassengerService } from '../../services/passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-view',
  templateUrl: './passenger-view.component.html',
  styleUrls: ['./passenger-view.component.scss']
})
export class PassengerViewComponent implements OnInit {

  passenger: Passenger;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PassengerService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((data: Passenger) => this.service.getPassenger(data.id)))
      .subscribe((data: Passenger) => this.passenger = data)

    this.service
      .getPassenger(1)
      .subscribe((data: Passenger) => {
        console.log("data", data);
        this.passenger = data;
      });
  }

  onUpdatePassenger(passenger: Passenger) {
    this.service
      .updatePassengers(passenger)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign(
          {},
          this.passenger,
          passenger
        );
      });
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
