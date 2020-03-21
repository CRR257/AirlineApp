import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-home',
  templateUrl: './passenger-home.component.html',
  styleUrls: ['./passenger-home.component.scss'],
})
export class PassengerHomeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goPassengers() {
    this.router.navigate(['/passengers']);
  }

  goTotalPassengers() {
    this.router.navigate(['/all-passengers']);
  }

}
