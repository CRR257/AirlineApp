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

// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Passenger } from '../../models/passenger.interface';
// import { Baggage } from '../../models/baggage.interface';

// @Component({
//     selector: 'passenger-form',
//     styleUrls: ['./passenger-form.component.scss'],
//     template: `
//         <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
//             {{ detail | json }}
//             <div>
//                 Passenger Name:
//                 <input type="text" name="fullname" #fullname="ngModel" [ngModel]="detail?.fullname" required />
//                 <small *ngIf="fullname.errors?.required && fullname.touched">Passenger name is required</small>
//             </div>
//             <div>
//                 Passenger ID:
//                 <input type="text" name="id" #id="ngModel" [ngModel]="detail?.id" required />
//                 <small *ngIf="id.errors?.required && id.dirty">ID is required</small>
//             </div>
//             <div>
//                 <label>
//                     <input type="radio" [value]="true" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)" />
//                     Yes
//                 </label>
//                 <label>
//                     <input type="radio" [value]="false" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)" />
//                     No
//                 </label>
//                 <div *ngIf="form.value.checkedIn">
//                     Check in date:
//                     <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate" />
//                 </div>
//                 <div>
//                     Luggage:
//                     <select name="baggage" [ngModel]="detail?.baggage">
//                         <option *ngFor="let item of baggage" [value]="item.key" [selected]="item.key === detail?.baggage">{{ item.value }}</option>
//                     </select>
//                 </div>
//             </div>
//             <button type="submit" [disabled]="form.invalid">Update Passenger</button>
//         </form>
//     `
// })
// export class PassengerFormComponent {
//     baggage: Baggage[] = [{
//         key: 'none',
//         value: 'No baggage'
//     }, {
//         key: 'hand-only',
//         value: 'Hand baggage'
//     }, {
//         key: 'hold-only',
//         value: 'Hold baggage'
//     }, {
//         key: 'hand-hold',
//         value: 'Hand and hold baggage'
//     }];

//     constructor() { }

//     @Input()
//     detail: Passenger;

//     @Output()
//     update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

//     toggleCheckIn(checkedIn: boolean) {
//         if (checkedIn) {
//             this.detail.checkInDate = Date.now();
//         }
//     }

//     handleSubmit(passenger: Passenger, isValid: boolean) {
//         if (isValid) {
//             this.update.emit(passenger);
//         }
//     }
// }