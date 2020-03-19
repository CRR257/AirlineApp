import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['./passenger-detail.component.scss'],
    templateUrl: 'passenger-detail.component.html'
})
export class PassengerDetailComponent {
    defaultFlag: string = 'european-union.svg';
    editing: boolean = false;

    @Input()
    display: boolean;

    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter();

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter();

    @Output()
    select: EventEmitter<Passenger> = new EventEmitter();

    constructor() { }

    onNameChange(value: string) {
        this.detail.fullname = value;
    }

    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }

    onCheckIn() {
        this.detail.checkedIn = true;
        this.detail.checkInDate = Date.now();
        this.edit.emit(this.detail);
    }

    onSelect() {
        this.select.emit(this.detail);
    }

}