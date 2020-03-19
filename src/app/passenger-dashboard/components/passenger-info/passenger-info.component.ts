import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-info',
    template: 'passenger-info.component.html'
})
export class PassengerInfoComponent {
    defaultFlag: string = 'european-union.svg';
    name: string;
    checkedIn: boolean;
    options = [
        { value: true, display: 'Yes' },
        { value: false, display: 'No' }
    ];

    @Input()
    passenger: Passenger;

    @Input()
    add: boolean;

    @Output()
    save: EventEmitter<any> = new EventEmitter();

    @Output()
    close: EventEmitter<any> = new EventEmitter();

    constructor() { }

    handleSave() {
        this.save.emit({
            'name': this.name,
            'checkedIn': this.checkedIn
        });
    }

    handleClose() {
        this.name = '';
        this.checkedIn = false;
        this.close.emit()
    }
}
