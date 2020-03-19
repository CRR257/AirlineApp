import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'passenger-actions',
    styleUrls: ['./passenger-actions.component.scss'],
    templateUrl: './passenger-actions.component.html'
})

export class PassengerActionsComponent {
    display: boolean;

    @Output()
    filter: EventEmitter<boolean> = new EventEmitter();

    @Output()
    add: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    filterPassengers(value: any) {
        this.display = value;
        this.filter.emit(this.display);
    }

    addPassenger() {
        this.add.emit();
    }
}
