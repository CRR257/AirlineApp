import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-info',
    template: `
    
        <div *ngIf="passenger && !add" class="card">
            <div>ID: {{ passenger.id }}</div>
            <div>Name: {{ passenger.fullname }}</div>
            <div>Checked In: {{ passenger.checkedIn ? 'Yes' : 'No' }}</div>
            <div>Check in date: {{ (passenger.checkInDate ? (passenger.checkInDate | date: 'MMMM d, y') : 'Not checked in') | uppercase }}</div>
            <div>Nationality: <img src="assets/flags/{{ (passenger.nationality ? passenger.nationality : defaultFlag) }}" width="17" /></div>
            <div>
                Children:
                <ul>
                    <li *ngFor="let child of passenger.children">{{ child.name }} | {{ child.age }}</li>
                </ul>
            </div>
        </div>
        <div *ngIf="add" class="card">
            <div>ID: <input type="text" placeholder="Automatic" disabled></div>
            <div>Name: <input type="text" [(ngModel)]="name" placeholder="Passenger's name"></div>
            <div>Checked In:
                <div *ngFor="let option of options">
                    <input type="radio" name="checked-in" [(ngModel)]="checkedIn" [value]="option.value">
                    {{ option.display }} 
                </div>
            </div>
            <button (click)="handleSave()">Save</button>
            <button (click)="handleClose()">Close</button>
        </div>
  `
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
