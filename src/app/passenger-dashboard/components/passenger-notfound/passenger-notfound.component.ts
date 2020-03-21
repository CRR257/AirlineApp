import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-passenger-notfound',
  templateUrl: './passenger-notfound.component.html',
  styleUrls: ['./passenger-notfound.component.scss']
})
export class PassengerNotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goPassengers() {
    this.router.navigate(['/all-passengers']);
  }
}
