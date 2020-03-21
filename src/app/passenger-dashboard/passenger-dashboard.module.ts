import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerActionsComponent } from './components/passenger-actions/passenger-actions.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerNotfoundComponent } from './components/passenger-notfound/passenger-notfound.component';

import { PassengerService } from './services/passenger-dashboard.service';

import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { PassengerViewComponent } from './components/passenger-view/passenger-view.component';
import { PassengerAllComponent } from './components/passenger-all/passenger-all.component';
import { PassengerFooterComponent } from './components/passenger-footer/passenger-footer.component';

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerActionsComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerInfoComponent,
        PassengerFormComponent,
        PassengerViewComponent,
        PassengerAllComponent,
        PassengerNotfoundComponent,
        PassengerFooterComponent      
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        BrowserModule,
    ],
    providers: [
        PassengerService
    ],
    exports: [
        PassengerDashboardComponent,
        PassengerViewComponent,
        PassengerAllComponent,
    ]
})

export class PassengerDashboardModule { }
