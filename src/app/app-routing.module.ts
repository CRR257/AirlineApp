import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerHomeComponent } from './passenger-dashboard/components/passenger-home/passenger-home.component';
import { PassengerDashboardComponent } from './passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerNotfoundComponent } from './passenger-dashboard/components/passenger-notfound/passenger-notfound.component';
import { PassengerViewComponent } from './passenger-dashboard/components/passenger-view/passenger-view.component';
import { PassengerAllComponent } from './passenger-dashboard/components/passenger-all/passenger-all.component';

const routes: Routes = [
  { path: '', component: PassengerHomeComponent },
  { path: 'passengers', component: PassengerDashboardComponent },
  { path: 'passengers/:id', component: PassengerViewComponent },
  { path: 'all-passengers', component: PassengerAllComponent },
  { path: '**', component: PassengerNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }