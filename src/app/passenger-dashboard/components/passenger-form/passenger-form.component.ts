import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['./passenger-form.component.scss'],
    templateUrl: './passenger-form.component.html'
})
export class PassengerFormComponent {


    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    }, {
        key: 'hand-only',
        value: 'Hand baggage'
    }, {
        key: 'hold-only',
        value: 'Hold baggage'
    }, {
        key: 'hand-hold',
        value: 'Hand and hold baggage'
    }];

    constructor() { }

    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    toggleCheckIn(checkedIn: boolean) {
        console.log('toggleCheckIn');
        if (checkedIn) {
            this.detail.checkInDate = Date.now();
        }
    }

    handleSubmit(passenger: Passenger, isValid: boolean) {
        if (isValid) {
            console.log(passenger);
            this.update.emit(passenger);
        }
    }
}