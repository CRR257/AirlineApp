import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';
import { PassengerHomeComponent } from './passenger-dashboard/components/passenger-home/passenger-home.component';
import { PassengerDashboardComponent} from './passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component';
import { NotFoundComponent} from './not-found.component';

const routes: Routes = [
  
   //{path: '', redirectTo: 'passengers', pathMatch: 'full'},
  // {path: '**', component: NotFoundComponent}

  //{path: '', component: PassengerHomeComponent },
  {path: '', component: PassengerHomeComponent },
  //{ path: 'passengers', component: PassengerDashboardComponent},
  {path: '**', component: NotFoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    PassengerHomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    PassengerDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
