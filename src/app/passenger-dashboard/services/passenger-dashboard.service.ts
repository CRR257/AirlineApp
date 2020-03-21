import { Passenger } from './../models/passenger.interface';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PASSENGER_API: string = `${environment.backend}/passengers`;

@Injectable()
export class PassengerService {
    constructor(private httpClient: HttpClient) { }

    getPassengers(): Observable<Passenger[]> {
        return this.httpClient
            .get<Passenger[]>(PASSENGER_API);
    }

    getPassenger(id: number): Observable<Passenger> {
        return this.httpClient
            .get<Passenger>(`${PASSENGER_API}/${id}`);
    }

    updatePassengers(passenger: Passenger): Observable<Passenger> {
        return this.httpClient
            .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger)
    }

    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.httpClient
            .delete<Passenger>(`${PASSENGER_API}/${passenger.id}`);
    }

    addPassenger(passenger: Passenger): Observable<Passenger> {
        return this.httpClient
            .post<Passenger>(`${PASSENGER_API}/`, passenger);
    }
}