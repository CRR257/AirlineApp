import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PassengerService } from './../../services/passenger-dashboard.service';
import { Passenger } from './../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['./passenger-dashboard.component.scss'],
    templateUrl: './passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
    display: boolean;
    displayDetails: boolean = false;
    defaultFlag: string = 'flags/european-union.svg';
    passengers: Passenger[];
    selectedPassenger: Passenger;
    error: any;
    enableNewPassenger = false;

    constructor(
        private router: Router,
        private passengerService: PassengerService
    ) { }

    ngOnInit() {
        this.passengerService
            .getPassengers()
            .subscribe(
                (data: Passenger[]) => this.passengers = data,
                error => this.error = error // error path
            );
    }

    handleEdit(event: Passenger) {
        this.passengerService
            .updatePassengers(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if (passenger.id === event.id) {
                        passenger = Object.assign({}, passenger, event);
                    }
                    return passenger;
                });
            });
    }

    handleRemove(event: Passenger) {
        this.passengerService
            .removePassenger(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
            });
    }

    handleFilter(display: boolean) {
        this.display = display;
    }

    handleSelect(passenger: Passenger) {
        this.selectedPassenger = passenger;
        this.displayDetails = true;
        this.router.navigate(['/passengers', passenger.id]);
    }

    handleAddPassenger() {
        this.enableNewPassenger = true;
    }

    handleClose() {
        this.enableNewPassenger = false;
    }

    handleSave(event) {
        const passenger: Passenger = {
            id: 0,
            fullname: event.name,
            checkedIn: event.checkedIn,
            children: null,
            nationality: this.defaultFlag
        };
        this.passengerService.addPassenger(passenger).subscribe((data: Passenger) => {
            if (data) {
                this.selectedPassenger = data;
                this.enableNewPassenger = false;
                this.passengers = [... this.passengers, data];
            }
        });
    }
}